import type { Metadata } from 'next';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CalendlyButton from '@/components/ui/CalendlyButton';
import FAQItem from '@/components/ui/FAQItem';

export const metadata: Metadata = {
  title: 'Growth Partner Program for Auto Detailers — DetailPro',
  description:
    'We install a client acquisition system that gets car detailers 10–20 booked detail jobs per month using SEO, Google Ads, and automated customer reactivation.',
  alternates: { canonical: 'https://www.detailpro.tech/partners' },
};

const painPoints = [
  "Some weeks you're slammed… other weeks you're sitting around waiting for calls",
  'You\'re relying on referrals, Instagram posts, and "hoping" people reach out',
  'You get messages like: "How much for a full detail?" …then they disappear',
  "You're stuck doing $100–$200 jobs instead of high-ticket services",
  "You've got gaps in your calendar you can't fill last minute",
  "You've tried boosting posts or ads… but nothing consistent came from it",
  "You're constantly answering DMs instead of focusing on the work",
  "You feel like you're running a business… but it still feels unpredictable",
];

const newWay = [
  'Wake up to inbound leads already requesting quotes',
  'Get 10–20+ high-intent detail jobs per month',
  'Attract customers searching for ceramic coatings, paint correction, and premium packages',
  'Stay booked 1–2 weeks out consistently',
  'Turn old customers into repeat bookings automatically',
  'Spend less time chasing leads and more time doing high-value work',
  'Build a reputation as the go-to premium detailer in your area',
];

const systemComponents = [
  {
    number: '01',
    title: 'Google Search Dominance (SEO)',
    desc: 'We position your business so you show up when people search "car detailing near me" or "ceramic coating [city]." Organic visibility that compounds over time — not rented attention.',
  },
  {
    number: '02',
    title: 'High-Intent Google Ads',
    desc: 'We bring in ready-to-book customers — not browsers or tire kickers. We target people who are already searching for your services with intent to hire.',
  },
  {
    number: '03',
    title: 'Client Reactivation System',
    desc: "We turn your past customers into repeat bookings and easy revenue — without spending a dollar on new ads. Your existing customer base is an untapped goldmine.",
  },
  {
    number: '04',
    title: 'Conversion System',
    desc: "We help structure your offers, follow-up, and booking process so more leads actually turn into paying jobs. More leads means nothing if they're not converting.",
  },
];

const testimonials = [
  {
    quote: 'Went from 5–6 jobs/week to fully booked 2 weeks out.',
    name: 'Mike R.',
    role: 'Mobile Detailer, Phoenix AZ',
  },
  {
    quote: 'Started getting ceramic coating jobs consistently instead of cheap details.',
    name: 'Jason T.',
    role: 'Auto Detailing Studio, Dallas TX',
  },
  {
    quote: 'Made more in 30 days than the previous 2 months combined.',
    name: 'Carlos M.',
    role: 'Premium Detailer, Miami FL',
  },
];

const faqs = [
  {
    question: 'Will this work in my city?',
    answer:
      "If people are searching for detailing services in your area — and they are — this works. Our system captures that existing demand and routes it to your business. We've helped detailers in competitive metros and smaller markets alike.",
  },
  {
    question: "What if I've tried ads before and it didn't work?",
    answer:
      "Most detailers run the wrong ads — low-intent traffic from broad targeting. We focus specifically on people already searching to book. That's the difference between someone scrolling Instagram who maybe becomes a customer someday, and someone Googling \"ceramic coating near me\" right now.",
  },
  {
    question: 'Do I need a big budget?',
    answer:
      "No. We start lean and scale once jobs are coming in. We'll discuss what makes sense for your market on the strategy call — but we're not going to burn your budget on campaigns before we've proven what works.",
  },
  {
    question: "What if I'm already busy sometimes?",
    answer:
      "Perfect. This fills the gaps and makes your schedule consistently full — so you're not riding the feast-or-famine cycle. Consistent bookings means you can plan ahead, hire help, and stop stressing about slow weeks.",
  },
];

function PrimaryCTA() {
  return (
    <CalendlyButton className="inline-block bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.45)] text-base">
      Get 10–20 Qualified Jobs Per Month →
    </CalendlyButton>
  );
}

export default function PartnersPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative bg-[#050119] overflow-hidden pt-24 pb-20 px-4">
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#5e25fa]/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#280aa5]/8 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative text-center">
            <span className="inline-block bg-[#5e25fa]/15 border border-[#5e25fa]/30 text-[#a78bfa] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
              For car detailers doing $6K–$15K/month
            </span>
            <h1 className="text-5xl md:text-6xl xl:text-[68px] font-black text-[#e7e6ee] mb-6 leading-[1.05] tracking-tight">
              Go from random slow weeks
              <br />
              <em className="font-light not-italic text-[#a3a3a3]">to</em>
              <br />
              <span className="text-[#5e25fa]">booked out with high-ticket jobs</span>
            </h1>
            <p className="text-[#a3a3a3] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              We install a client acquisition system — SEO + Google Ads + customer reactivation — that brings you 10–20 qualified detail jobs every month. No referral luck required.
            </p>
            <div className="flex flex-col items-center gap-3">
              <PrimaryCTA />
              <p className="text-[#a3a3a3] text-sm">Free strategy call · No pitch, just a real conversation</p>
            </div>
          </div>
        </section>

        {/* ── VSL ── */}
        <section className="py-16 px-4 bg-[#050119]">
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video bg-white/3 border border-white/10 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#5e25fa]/20 border border-[#5e25fa]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#5e25fa] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-[#a3a3a3] text-sm">Watch the video</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-6 px-4 bg-[#050119]">
          <div className="max-w-xl mx-auto text-center">
            <PrimaryCTA />
          </div>
        </section>

        {/* ── Pain / Old Way ── */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-red-400/80 text-xs font-semibold uppercase tracking-[0.25em] mb-4">The old way</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#e7e6ee] leading-tight">
                Does this sound like you?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {painPoints.map((point, i) => (
                <div key={i} className="bg-white/3 border border-white/8 rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-1.5 min-h-[40px] bg-red-500/50 rounded-full shrink-0 mt-1" />
                  <p className="text-[#a3a3a3] text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/2 border border-white/8 rounded-2xl p-6">
              <p className="text-[#e7e6ee] font-semibold mb-4">What you really don't like about it:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "You can't predict your income",
                  "You feel like you're always chasing the next job",
                  "You're doing more work… not making more money",
                  "You don't want to be a full-time marketer",
                ].map((t, i) => (
                  <p key={i} className="text-[#a3a3a3] text-sm flex items-start gap-2">
                    <span className="text-red-400/70 mt-0.5 shrink-0">→</span>
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── New Way ── */}
        <section className="py-24 px-4 bg-white/2 border-y border-white/6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-[#a78bfa] text-xs font-semibold uppercase tracking-[0.25em] mb-4">The new way</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#e7e6ee] leading-tight mb-4">
                What this actually does for you
              </h2>
              <p className="text-[#a3a3a3] max-w-2xl mx-auto">
                We don't rely on social media or "hoping" people see your posts. We build a Google-based system that captures people already searching for your services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {newWay.map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-[#5e25fa]/10 to-[#280aa5]/5 border border-[#5e25fa]/20 rounded-2xl p-5 flex items-start gap-4">
                  <svg className="w-5 h-5 text-[#5e25fa] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[#e7e6ee] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <PrimaryCTA />
            </div>
          </div>
        </section>

        {/* ── System Components ── */}
        <section className="py-24 px-4 bg-[#050119]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">What we install</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#e7e6ee] mb-4 leading-tight">
                This is not "marketing help."
              </h2>
              <p className="text-[#a3a3a3] max-w-xl mx-auto text-lg">
                This is a{' '}
                <span className="text-[#e7e6ee] font-semibold">done-for-you client acquisition system</span>{' '}
                built specifically for detailers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {systemComponents.map((item) => (
                <div
                  key={item.number}
                  className="bg-white/3 border border-white/8 rounded-2xl p-7 hover:bg-white/5 hover:border-[#5e25fa]/30 transition-all"
                >
                  <p className="text-[#5e25fa]/60 text-xs font-bold uppercase tracking-[0.3em] mb-3">{item.number}</p>
                  <h3 className="font-bold text-[#e7e6ee] text-lg mb-3">{item.title}</h3>
                  <p className="text-[#a3a3a3] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">Results</p>
              <h2 className="text-4xl font-black text-[#e7e6ee]">Here's what others are saying</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white/3 border border-white/8 rounded-2xl p-7">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-[#5e25fa]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#e7e6ee] text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div>
                    <p className="text-[#e7e6ee] font-semibold text-sm">{t.name}</p>
                    <p className="text-[#a3a3a3] text-xs">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-6 px-4">
          <div className="max-w-xl mx-auto text-center">
            <PrimaryCTA />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-4 bg-white/2 border-y border-white/6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-[#e7e6ee] text-center mb-12">Frequently asked questions</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="py-24 px-4 bg-[#050119]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4 text-center">About us</p>
            <h2 className="text-4xl font-black text-[#e7e6ee] text-center mb-10">The Growth Partner Program</h2>
            <div className="bg-white/3 border border-white/8 rounded-3xl p-8 mb-6">
              <p className="text-[#a3a3a3] leading-relaxed mb-6">
                We help car detailers install simple, predictable systems that bring in consistent, high-quality jobs — without relying on referrals or social media guessing.
              </p>
              <div className="border-t border-white/8 pt-6 space-y-4">
                {[
                  'We focus specifically on local service businesses like detailers',
                  "We don't just generate leads — we help you turn them into booked jobs",
                  'We build systems that keep working long-term, not short-term spikes',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#5e25fa] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-[#a3a3a3] text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#5e25fa]/8 border border-[#5e25fa]/20 rounded-3xl p-8">
              <h3 className="font-bold text-[#e7e6ee] mb-3">Our mission</h3>
              <p className="text-[#a3a3a3] leading-relaxed">
                To help detailers stop guessing where their next job is coming from — and give them a predictable, booked-out calendar they can rely on.
              </p>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="relative py-28 px-4 overflow-hidden bg-[#050119]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5e25fa]/12 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative">
            <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Ready to stop guessing?</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#e7e6ee] mb-6 leading-tight tracking-tight">
              Get 10–20 qualified
              <br />detail jobs per month.
            </h2>
            <p className="text-[#a3a3a3] mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Free strategy call. We'll look at your market, your current setup, and build a realistic plan — no pitch, just an honest conversation about what it takes to get you consistently booked.
            </p>
            <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-bold px-12 py-5 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(94,37,250,0.5)] text-lg">
              Book My Free Strategy Call →
            </CalendlyButton>
            <p className="text-[#a3a3a3] text-sm mt-5">
              We help car detailers who are stuck on referrals install a system that brings in 10–20 high-quality jobs per month from Google.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
