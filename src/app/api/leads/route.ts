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

  return Response.json({ success: true });
}
