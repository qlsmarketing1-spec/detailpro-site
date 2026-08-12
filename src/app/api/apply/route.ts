import { upsertBrevoContact } from '@/lib/brevo';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { email, name, phone, path, ticket, result, answers } = body as Record<string, unknown>;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    return Response.json({ error: 'Valid email is required' }, { status: 400 });
  }

  const attributes: Record<string, unknown> = {};
  if (name) attributes.FIRSTNAME = name;
  if (phone) {
    attributes.SMS = phone;
    attributes.PHONE = phone;
  }
  if (path) attributes.APPLY_PATH = path;
  if (ticket) attributes.APPLY_TICKET = ticket;
  if (result) attributes.APPLY_RESULT = result;
  if (answers) attributes.APPLY_ANSWERS = JSON.stringify(answers);

  try {
    const res = await upsertBrevoContact(String(email), attributes);
    if (!res.ok && res.status !== 204) {
      console.error('Brevo error:', res.status, res.body);
      return Response.json({ error: 'Failed to save contact' }, { status: 500 });
    }
    return Response.json({ success: true });
  } catch (err) {
    console.error('Brevo request failed:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
