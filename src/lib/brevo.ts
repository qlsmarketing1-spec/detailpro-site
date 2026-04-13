export async function upsertBrevoContact(
  email: string,
  attributes: Record<string, unknown>
): Promise<{ ok: boolean; status: number; body: unknown }> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error('BREVO_API_KEY is not set');

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [4],
      updateEnabled: true,
      attributes,
    }),
  });

  const body = await res.json().catch(() => null);
  return { ok: res.ok, status: res.status, body };
}
