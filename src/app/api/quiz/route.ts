import { upsertBrevoContact } from '@/lib/brevo';

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

  const attributes: Record<string, unknown> = {};
  if (firstName) attributes.FIRSTNAME = firstName;
  if (phone) attributes.SMS = phone;
  if (city) attributes.CITY = city;
  if (instagram) attributes.INSTAGRAM = instagram;
  if (websiteUrl) attributes.WEBSITE_URL = websiteUrl;
  if (score !== undefined) attributes.QUIZ_SCORE = Number(score);
  if (tier) attributes.RESULT_TIER = tier;
  if (monthlyRevenue) attributes.MONTHLY_REVENUE = monthlyRevenue;
  if (revenueGoal) attributes.REVENUE_GOAL = revenueGoal;
  if (bottleneck) attributes.BOTTLENECK = bottleneck;
  if (triedAds !== undefined) attributes.TRIED_ADS = triedAds ? 'yes' : 'no';

  try {
    const result = await upsertBrevoContact(String(email), attributes);
    if (!result.ok && result.status !== 204) {
      console.error('Brevo error:', result.status, result.body);
      return Response.json({ error: 'Failed to save contact' }, { status: 500 });
    }
    return Response.json({ success: true, tier, score });
  } catch (err) {
    console.error('Brevo request failed:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
