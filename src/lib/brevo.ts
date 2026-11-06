/**
 * Save form submissions as Brevo contacts.
 *
 * Env:
 *   BREVO_API_KEY   required
 *   BREVO_LIST_ID   optional, list to add contacts to (default 4)
 *
 * Every attribute written here must exist in Brevo: see brevo-attributes.json
 * and run `npm run brevo:setup`.
 */

const DEFAULT_LIST_ID = 4;

export type BrevoResult = { ok: boolean; status: number; body: unknown };

/** Brevo's SMS field only accepts E.164 numbers; return null if we can't make one. */
export function toE164(phone: string): string | null {
  const trimmed = phone.trim();
  const digits = trimmed.replace(/\D/g, '');
  if (trimmed.startsWith('+') && digits.length >= 8 && digits.length <= 15) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return null;
}

/** Built-in contact fields: FIRSTNAME, LASTNAME, SMS (when valid), PHONE (raw). */
export function nameAndPhoneAttributes(name?: unknown, phone?: unknown): Record<string, string> {
  const attrs: Record<string, string> = {};
  if (typeof name === 'string' && name.trim()) {
    const [first, ...rest] = name.trim().split(/\s+/);
    attrs.FIRSTNAME = first;
    if (rest.length) attrs.LASTNAME = rest.join(' ');
  }
  if (typeof phone === 'string' && phone.trim()) {
    attrs.PHONE = phone.trim();
    const sms = toE164(phone);
    if (sms) attrs.SMS = sms;
  }
  return attrs;
}

async function post(apiKey: string, email: string, attributes: Record<string, unknown>): Promise<BrevoResult> {
  const listId = Number(process.env.BREVO_LIST_ID) || DEFAULT_LIST_ID;
  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json', 'api-key': apiKey },
    body: JSON.stringify({ email, listIds: [listId], updateEnabled: true, attributes }),
  });
  const body = await res.json().catch(() => null);
  return { ok: res.ok, status: res.status, body };
}

/**
 * Create or update a contact. Never throws. On failure the full submission is
 * logged so it can be recovered from the server logs.
 */
export async function upsertBrevoContact(
  email: string,
  attributes: Record<string, unknown>,
): Promise<BrevoResult> {
  const apiKey = process.env.BREVO_API_KEY;
  const fail = (status: number, body: unknown): BrevoResult => {
    console.error('[brevo] save failed', status, JSON.stringify(body), 'submission:', JSON.stringify({ email, attributes }));
    return { ok: false, status, body };
  };
  if (!apiKey) return fail(0, 'BREVO_API_KEY is not set');

  // Drop empty values so we never blank out existing data on an update.
  const clean = Object.fromEntries(
    Object.entries(attributes).filter(([, v]) => v !== undefined && v !== null && v !== ''),
  );

  try {
    let result = await post(apiKey, email, clean);
    // SMS is the usual cause of rejections (bad format, or already on another contact).
    // Retry without it rather than lose the lead. PHONE still holds the number.
    if (!result.ok && result.status === 400 && 'SMS' in clean) {
      const withoutSms = { ...clean };
      delete withoutSms.SMS;
      result = await post(apiKey, email, withoutSms);
    }
    return result.ok ? result : fail(result.status, result.body);
  } catch (err) {
    return fail(0, String(err));
  }
}
