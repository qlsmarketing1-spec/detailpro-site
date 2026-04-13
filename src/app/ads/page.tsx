import type { Metadata } from 'next';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CalendlyButton from '@/components/ui/CalendlyButton';
import FAQItem from '@/components/ui/FAQItem';
import AuditRequestForm from '@/components/forms/AuditRequestForm';

export const metadata: Metadata = {
  title: 'Done-For-You Ads Management for Auto Detailers — DetailPro',
  description:
    'Meta + Google ads managed for your detailing shop. $2,397 setup + 10% rev share. We only win when you win. Proven results: $2,500 budget → 14x return.',
  alternates: { canonical: 'https://www.detailpro.tech/ads' },
};

const results = [
  {
    stat: '14x',
    label: 'return on ad spend',
    detail: '$2,500 ad budget → $35,000 in ceramic bookings over 60 days',
  },
  {
    stat: '$6k → $25k',
    label: 'monthly revenue growth',
    detail: 'Mobile detailer scaled from $6k to $25k/mo in 4 months with Meta ads',
  },
  {
    stat: '$3',
    label: 'cost per RV detail lead',
    detail: 'Mobile detailer targeting RV owners — $3 per qualified lead from Facebook',
  },
];

const included = [
  {
    title: 'Meta (Facebook + Instagram) campaigns',
    desc: 'Local audience targeting built around your ideal customer. Creative developed from proven detailing ad templates. A/B tested and optimized monthly.',
  },
  {
    title: 'Google Search campaigns',
    desc: 'Capture customers searching for detailing services right now — "ceramic coating near me," "auto detailing [city]." High intent, immediate results.',
  },
  {
    title: 'DetailPro CRM — lifetime access',
    desc: 'The $197/mo subscription is included at no extra cost. Your ads drive leads; the CRM catches and converts them.',
  },
  {
    title: '3 strategy coaching calls',
    desc: 'Beyond the ads — pricing strategy, service menu optimization, hiring, operations. Real conversations about growing your business.',
  },
];

const faqs = [
  {
    question: "What's the minimum ad budget I need?",
    answer:
      "$300–$1,000/month in ad spend is the minimum to generate consistent results. Below that, the algorithm doesn't have enough data to optimize. We'll discuss the right budget for your market during the strategy call.",
  },
  {
    question: 'How does the 10% revenue share work?',
    answer:
      "Each month, we calculate 10% of the revenue you generated through the platform — booked jobs, ceramic contracts, fleet accounts that came through the CRM. During slow months, your payment is lower. During boom months, it scales. We're incentivized to help you make more money.",
  },
  {
    question: 'How long until I see my first leads?',
    answer:
      "Most clients see their first leads within the first 7–14 days. Google Search campaigns typically convert faster (customers are actively searching). Meta takes 2–4 weeks for the algorithm to learn your audience. We set expectations clearly upfront.",
  },
  {
    question: 'Do I own my ad account?',
    answer:
      "Yes. You own the ad account. We manage it on your behalf. If you ever leave, the account and its history stays with you. We don't hold your data hostage.",
  },
  {
    question: 'What if results aren't there after 90 days?',
    answer:
      "If results aren't showing within 90 days, I go hands-on with direct 1-on-1 coaching to diagnose what's not working. In almost every case where the system underperforms, the root cause is slow lead follow-up on the shop's end — that's what the CRM is designed to fix.",
  },
];

export default function AdsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#050119] overflow-hidden pt-24 pb-20 px-4">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#5e25fa]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative">
            <span className="inline-block bg-[#5e25fa]/15 border border-[#5e25fa]/30 text-[#a78bfa] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Ads Management · $2,397 setup + 10% rev share
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#e7e6ee] mb-6 leading-tight">
              Done-for-you ads that<br className="hidden md:block" /> fill your calendar.
            </h1>
            <p className="text-[#a3a3a3] text-lg md:text-xl max-w-2xl mx-auto mb-4">
              Meta + Google campaigns managed for your shop. We only win when you win — our fee scales with your revenue, not against it.
            </p>
            <p className="text-[#a78bfa] font-semibold text-sm mb-10">$2,500 budget → 14x return. $6k/mo → $25k/mo in 4 months.</p>
            <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg">
              Book a Strategy Call
            </CalendlyButton>
          </div>
        </section>

        {/* Pain */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-12">
              Word of mouth has a ceiling. Ads don't.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Word of mouth dries up in winter", desc: "Referrals slow when weather changes. If you don't have a paid channel, slow months are out of your control." },
                { title: "Competitors are outspending you", desc: "The shops in your market running ads are getting calls you'll never know about. Every day you're not advertising is a day they're growing." },
                { title: "Generic agencies don't get detailing", desc: "They track \"leads\" but don't understand ceramic pricing. They optimize for volume, not bookings. They charge $1,500/mo whether you grow or not." },
                { title: "You don't know what a customer costs", desc: "Without data, you can't make smart growth decisions. Ads give you exact cost-per-lead, cost-per-booking, and real ROI numbers." },
              ].map((p) => (
                <div key={p.title} className="bg-white/3 border border-white/8 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 min-h-[40px] bg-red-500/60 rounded-full shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#e7e6ee] mb-1">{p.title}</h3>
                      <p className="text-[#a3a3a3] text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 px-4 bg-white/2 border-y border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">Real results</p>
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-12">Numbers from actual shops</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.map((r) => (
                <div key={r.stat} className="bg-gradient-to-br from-[#5e25fa]/15 to-[#280aa5]/8 border border-[#5e25fa]/25 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-black text-[#a78bfa] mb-2">{r.stat}</p>
                  <p className="text-[#e7e6ee] font-semibold text-sm mb-3">{r.label}</p>
                  <p className="text-[#a3a3a3] text-xs leading-relaxed">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">What you get</p>
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-12">Everything included. No a la carte.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((i) => (
                <div key={i.title} className="bg-white/3 border border-white/8 rounded-2xl p-6">
                  <h3 className="font-bold text-[#e7e6ee] mb-2">{i.title}</h3>
                  <p className="text-[#a3a3a3] text-sm leading-relaxed">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing + rev share explanation */}
        <section className="py-20 px-4 bg-[#050119]">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">Pricing</p>
            <div className="bg-white/4 border border-white/10 rounded-3xl p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <p className="text-4xl font-black text-[#e7e6ee]">$2,397</p>
                  <p className="text-[#a3a3a3] text-sm mt-1">one-time setup fee</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#e7e6ee]">10%</p>
                  <p className="text-[#a3a3a3] text-sm mt-1">of monthly managed revenue</p>
                </div>
              </div>
              <p className="text-[#a3a3a3] text-sm text-center leading-relaxed">
                No flat monthly retainer. No paying us when you're slow. When you make more, we make more. When it's a slow month, your payment drops automatically.
              </p>
            </div>
            <div className="bg-[#5e25fa]/8 border border-[#5e25fa]/20 rounded-2xl p-6">
              <h3 className="font-bold text-[#e7e6ee] mb-2">Why rev share instead of a flat retainer?</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                Flat-retainer agencies charge $1,500–3,000/month whether your calendar is full or empty. They optimize for impressions and click volume — metrics that look good in reports but don't pay your bills. The rev share model means we're structurally incentivized to produce revenue, not activity. If the ads aren't making you money, we aren't either.
              </p>
            </div>
          </div>
        </section>

        {/* Audit form */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <AuditRequestForm source="ads_page_audit" context="ads-page" />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-[#050119]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-10">Common questions</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#e7e6ee] mb-4">
              Ready to stop relying on word of mouth?
            </h2>
            <p className="text-[#a3a3a3] mb-8">
              Book a strategy call. We'll look at your market, your current setup, and build a plan.
            </p>
            <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg">
              Book My Strategy Call
            </CalendlyButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
