import { nameAndPhoneAttributes, upsertBrevoContact } from '@/lib/brevo';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const {
    email,
    firstName,
    phone,
    city,
    instagram,
    websiteUrl,
    score,
    tier,
    monthlyRevenue,
    revenueGoal,
    bottleneck,
    triedAds,
  } = body as Record<string, unknown>;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    return Response.json({ error: 'Valid email is required' }, { status: 400 });
  }

  const saved = await upsertBrevoContact(String(email), {
    ...nameAndPhoneAttributes(firstName, phone),
    LEAD_SOURCE: 'quiz',
    CITY: city,
    INSTAGRAM: instagram,
    WEBSITE_URL: websiteUrl,
    QUIZ_SCORE: score !== undefined && score !== '' ? Number(score) : undefined,
    RESULT_TIER: tier,
    MONTHLY_REVENUE: monthlyRevenue,
    REVENUE_GOAL: revenueGoal,
    BOTTLENECK: bottleneck,
    TRIED_ADS: triedAds === undefined ? undefined : triedAds ? 'yes' : 'no',
  });
  if (!saved.ok) return Response.json({ error: 'Failed to save contact' }, { status: 500 });

  return Response.json({ success: true, tier, score });
}
