import { nameAndPhoneAttributes, upsertBrevoContact } from '@/lib/brevo';
import type { AnswerLabel } from '@/lib/apply-answers';

// Question id → dedicated Brevo attribute, so key answers can be filtered/segmented.
const NEW_FIELDS: Record<string, string> = {
  q8: 'APPLY_TIME_PER_WEEK',
  q9: 'APPLY_INVEST',
  q10: 'APPLY_INCOME_GOAL',
  q11: 'APPLY_FUNDING',
  q14: 'APPLY_INTEREST',
};
const EXISTING_FIELDS: Record<string, string> = {
  e1: 'BIZ_TYPE',
  e2: 'BIZ_MRR',
  e3: 'BIZ_AGE',
  e4: 'BIZ_TEAM_SIZE',
  e6: 'BIZ_LEAD_SOURCE',
  e8: 'BIZ_WEBSITE',
  e10: 'BIZ_GOAL',
  e11: 'APPLY_INVEST',
  e13: 'APPLY_INTEREST',
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { email, name, phone, path, ticket, result, answers, answerLabels, why } = body as Record<string, unknown>;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    return Response.json({ error: 'Valid email is required' }, { status: 400 });
  }

  const labels: AnswerLabel[] = Array.isArray(answerLabels) ? (answerLabels as AnswerLabel[]) : [];
  const fieldMap = path === 'existing' ? EXISTING_FIELDS : NEW_FIELDS;

  const attributes: Record<string, unknown> = {
    ...nameAndPhoneAttributes(name, phone),
    LEAD_SOURCE: path === 'existing' ? 'apply_existing' : 'apply',
    APPLY_PATH: path,
    APPLY_TICKET: ticket,
    APPLY_DATE: new Date().toISOString().slice(0, 10),
    APPLY_RESULT: result,
    APPLY_WHY: typeof why === 'string' ? why.trim() : undefined,
    APPLY_SUMMARY: labels.map((l) => `${l.question}\n→ ${l.answer}`).join('\n\n'),
    APPLY_ANSWERS: answers ? JSON.stringify(answers) : undefined,
  };
  for (const l of labels) {
    const attr = fieldMap[l.id];
    if (attr) attributes[attr] = l.answer;
  }

  const saved = await upsertBrevoContact(String(email), attributes);
  if (!saved.ok) return Response.json({ error: 'Failed to save application' }, { status: 500 });

  return Response.json({ success: true });
}
