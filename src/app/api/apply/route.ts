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

  return Response.json({ success: true });
}
