import { upsertBrevoContact } from '@/lib/brevo';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { email, name, phone, source, websiteUrl } = body as Record<string, string>;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Valid email is required' }, { status: 400 });
  }

  const attributes: Record<string, unknown> = {};
  if (name) attributes.FIRSTNAME = name;
  if (phone) attributes.SMS = phone;
  if (source) attributes.SOURCE = source;
  if (websiteUrl) attributes.WEBSITE_URL = websiteUrl;

  try {
    const result = await upsertBrevoContact(email, attributes);
    if (!result.ok && result.status !== 204) {
      console.error('Brevo error:', result.status, result.body);
      return Response.json({ error: 'Failed to save contact' }, { status: 500 });
    }
    return Response.json({ success: true });
  } catch (err) {
    console.error('Brevo request failed:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
