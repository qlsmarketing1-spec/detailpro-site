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
    context: 'Single-operator ceramic specialist, mid-size market, Meta campaigns.',
  },
  {
    stat: '$6k → $25k',
    label: 'monthly revenue growth',
    detail: 'Mobile detailer scaled from $6k to $25k/mo in 4 months with Meta ads',
    context: 'Mobile detailer with no prior ad spend. Fully booked within 90 days.',
  },
  {
    stat: '$3',
    label: 'cost per qualified lead',
    detail: 'Mobile detailer targeting RV owners — $3 per qualified lead from Facebook',
    context: 'Niche service targeting RV parks. Expanded to two new counties within 60 days.',
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
    title: 'DetailPro CRM — included free',
    desc: 'The $197/mo subscription is included at no extra cost. Your ads drive leads; the CRM catches and converts them before a competitor does.',
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
    question: "What if results aren't there after 90 days?",
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

        {/* ── Hero ── */}
        <section className="relative bg-[#050119] overflow-hidden pt-24 pb-20 px-4">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#5e25fa]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#280aa5]/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: text */}
              <div>
                <span className="inline-block bg-[#5e25fa]/15 border border-[#5e25fa]/30 text-[#a78bfa] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                  Done-for-you ads management
                </span>
                <h1 className="text-5xl md:text-6xl xl:text-[68px] font-black text-[#e7e6ee] mb-6 leading-[1.05] tracking-tight">
                  Stop relying
                  <br />
                  on word of
                  <br />
                  <span className="text-[#5e25fa]">mouth.</span>
                </h1>
                <p className="text-[#a3a3a3] text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                  Meta + Google campaigns managed for your shop. We only win when you win — our fee scales with your revenue, not against it.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                  <CalendlyButton className="inline-block bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-bold px-9 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.45)] text-base">
                    Book a Strategy Call
                  </CalendlyButton>
                  <a
                    href="#audit"
                    className="inline-flex items-center gap-2 border border-white/15 hover:border-[#5e25fa]/40 text-[#e7e6ee] font-semibold px-9 py-4 rounded-full text-base transition-all hover:bg-white/5"
                  >
                    Get a free review first
                  </a>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {['No flat retainer', 'You own your ad account', 'CRM included free'].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-[#a3a3a3] text-sm">
                      <svg className="w-3.5 h-3.5 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: results stats */}
              <div className="flex flex-col gap-4">
                {results.map((r) => (
                  <div key={r.stat} className="bg-gradient-to-br from-[#5e25fa]/10 to-[#280aa5]/5 border border-[#5e25fa]/20 rounded-2xl p-6 flex items-start gap-6">
                    <div className="shrink-0 text-center min-w-[72px]">
                      <p className="text-3xl font-black text-[#a78bfa] leading-none mb-1">{r.stat}</p>
                      <p className="text-[#a3a3a3] text-xs">{r.label}</p>
                    </div>
                    <div className="border-l border-white/10 pl-6">
                      <p className="text-[#e7e6ee] text-sm font-semibold mb-1">{r.detail}</p>
                      <p className="text-[#a3a3a3] text-xs leading-relaxed">{r.context}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Pain ── */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-12">
              Word of mouth has a ceiling. Ads don't.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Word of mouth dries up in winter', desc: "Referrals slow when weather changes. If you don't have a paid channel, slow months are out of your control." },
                { title: 'Competitors are outspending you', desc: "The shops in your market running ads are getting calls you'll never know about. Every day you're not advertising is a day they're growing." },
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

        {/* ── What's included ── */}
        <section className="py-20 px-4 bg-white/2 border-y border-white/6">
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

        {/* ── Pricing ── */}
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

        {/* ── FAQ ── */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-10">Common questions</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Primary CTA ── */}
        <section className="py-24 px-4 bg-[#050119]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Ready to scale past word of mouth?</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#e7e6ee] mb-4 leading-tight">
              Book a free
              <br />strategy call.
            </h2>
            <p className="text-[#a3a3a3] mb-10 max-w-xl mx-auto">
              We'll look at your market, your current revenue, and build a realistic plan. No pitch — just an honest conversation about whether ads make sense for your shop right now.
            </p>
            <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-bold px-12 py-5 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.5)] text-lg mb-5">
              Book My Strategy Call
            </CalendlyButton>
            <p className="text-[#a3a3a3] text-sm">
              Not ready for a call?{' '}
              <a href="#audit" className="text-[#e7e6ee]/70 underline underline-offset-2 hover:text-[#e7e6ee] transition-colors">
                Request a free review instead →
              </a>
            </p>
          </div>
        </section>

        {/* ── Audit form (fallback lead capture) ── */}
        <section id="audit" className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">Not ready for a call?</p>
              <h2 className="text-3xl font-bold text-[#e7e6ee] mb-3">Not sure if ads are right for your shop?</h2>
              <p className="text-[#a3a3a3] max-w-xl mx-auto">
                Drop your info below. We'll review your market, your current setup, and send you an honest take on whether paid ads make sense for you right now.
              </p>
            </div>
            <AuditRequestForm source="ads_page_audit" context="ads-page" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
