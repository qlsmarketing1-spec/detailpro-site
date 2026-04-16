import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CalendlyButton from '@/components/ui/CalendlyButton';
import FAQItem from '@/components/ui/FAQItem';

export const metadata: Metadata = {
  title: 'CRM Software for Auto Detailers — DetailPro',
  description:
    'DetailPro CRM is built for detailing operations — speed-to-lead SMS, consumer and fleet pipelines, automated review requests. Not for weekend warriors. $197/mo.',
  alternates: { canonical: 'https://www.detailpro.tech/software' },
};

const faqs = [
  {
    question: 'How is this different from Jobber or Housecall Pro?',
    answer:
      "Jobber and HCP are built for field service broadly — plumbers, HVAC, landscaping. DetailPro is built specifically for detailing. That means pipelines that match how detailing actually closes (ceramic coatings are not the same as a wash), a dedicated fleet account system, and speed-to-lead automation designed for the 5-minute window that decides whether you get the booking.",
  },
  {
    question: 'What does the speed-to-lead SMS actually send?',
    answer:
      "An automated message that acknowledges the inquiry and pushes the customer toward booking — firing within 30 seconds. Due to messaging regulations, the automation handles this first touchpoint. You follow up personally from there. The value is getting there before they text your competitor.",
  },
  {
    question: 'Do I need a website to use the CRM?',
    answer:
      "No. It works with any existing website, Google Business Profile, or social media presence. If you need a better site, we build those separately for $597 one-time.",
  },
  {
    question: 'Is there a contract or setup fee?',
    answer:
      "$197/month. No contract, no setup fee. Cancel anytime. If you sign up for ads management, the CRM is bundled in at no extra cost.",
  },
  {
    question: 'What happens if I want to cancel?',
    answer:
      "Cancel anytime — no fees, no holdbacks. Your data stays accessible for 30 days so you can export everything you need.",
  },
];

export default function SoftwarePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative bg-[#050119] overflow-hidden pt-28 pb-20 px-4">
          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#5e25fa]/8 rounded-full blur-[160px] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative">
            <span className="inline-block bg-[#5e25fa]/15 border border-[#5e25fa]/30 text-[#a78bfa] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
              CRM Software for Auto Detailers
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#e7e6ee] mb-6 leading-[1.05] tracking-tight">
              Built for shops
              <br />
              that run on systems,
              <br />
              <span className="text-[#5e25fa]">not luck.</span>
            </h1>
            <p className="text-[#a3a3a3] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              DetailPro CRM manages your consumer pipeline, fleet accounts, and speed-to-lead automation in one place — so jobs close while you're under a car.
            </p>
            <Link
              href="https://www.detailprocrm.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.45)] text-lg"
            >
              Start Your 7-Day Free Trial
            </Link>
          </div>
        </section>

        {/* ── Who it's for / not for ── */}
        <section className="py-20 px-4 bg-[#050119] border-b border-white/6">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-12">Know before you book</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* For */}
              <div className="bg-[#5e25fa]/8 border border-[#5e25fa]/25 rounded-3xl p-8">
                <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-5">This is built for you if</p>
                <ul className="space-y-4">
                  {[
                    "You're running $5k–$30k/mo and leads are falling through the cracks",
                    "You manage jobs through texts and a notes app and it's costing you bookings",
                    "You want to land fleet accounts — dealerships, rental companies, corporate fleets",
                    "You're ready to stop being the bottleneck in your own business",
                    "You have a team or are building toward one",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#e7e6ee] leading-relaxed">
                      <svg className="w-4 h-4 text-[#5e25fa] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not for */}
              <div className="bg-white/3 border border-white/8 rounded-3xl p-8">
                <p className="text-[#a3a3a3] text-xs font-bold uppercase tracking-widest mb-5">This is not for you if</p>
                <ul className="space-y-4">
                  {[
                    "You're detailing on weekends and have no intention of scaling",
                    "You're under $3k/mo and still figuring out your service menu",
                    "You want a tool that manages everything for you with zero involvement",
                    "You won't follow up on leads — the CRM gives you speed, but you close",
                    "You're not willing to spend $300–$1k/mo on ads to fuel the pipeline",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#a3a3a3] leading-relaxed">
                      <svg className="w-4 h-4 text-red-500/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ── Software screenshots ── */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">Inside the platform</p>
              <h2 className="text-3xl md:text-5xl font-black text-[#e7e6ee]">Everything in one dashboard.</h2>
            </div>

            {/* Dashboard */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                  <Image
                    src="/images/crm-dashboard.png"
                    alt="DetailPro CRM dashboard showing revenue, leads, and pipeline"
                    width={1200}
                    height={750}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050119]/40 to-transparent pointer-events-none" />
                </div>
                <div>
                  <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-3">Dashboard</p>
                  <h3 className="text-2xl md:text-3xl font-black text-[#e7e6ee] mb-4">Your whole business at a glance.</h3>
                  <p className="text-[#a3a3a3] leading-relaxed mb-6">
                    Active leads, monthly revenue, win rate, pipeline value — all live. Know exactly where you stand before you pick up the phone.
                  </p>
                  <ul className="space-y-2">
                    {['Live pipeline value', 'Most requested services', 'Top fleet targets ranked by value/yr', "Today's tasks"].map((i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-[#e7e6ee]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5e25fa] shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Consumer Pipeline */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-center">
                <div className="order-2 lg:order-1">
                  <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-3">Consumer Pipeline</p>
                  <h3 className="text-2xl md:text-3xl font-black text-[#e7e6ee] mb-4">Every lead. Every stage. Nothing slips.</h3>
                  <p className="text-[#a3a3a3] leading-relaxed mb-6">
                    New leads, contacted, qualified, proposal sent — a kanban board designed for how detailing actually closes. Service, vehicle, value, and last contact date on every card.
                  </p>
                  <ul className="space-y-2">
                    {['Consumer, ceramic, PPF, and maintenance tracked separately', 'Lead score visible on every card', 'Assign jobs to team members', 'One-click move between stages'].map((i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-[#e7e6ee]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5e25fa] shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                  <Image
                    src="/images/crm-consumer-pipeline.png"
                    alt="DetailPro CRM consumer pipeline kanban view"
                    width={1200}
                    height={750}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050119]/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Fleet Pipeline */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                  <Image
                    src="/images/crm-fleet-pipeline.png"
                    alt="DetailPro CRM fleet and commercial pipeline"
                    width={1200}
                    height={750}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050119]/40 to-transparent pointer-events-none" />
                </div>
                <div>
                  <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-3">Fleet / Commercial Pipeline</p>
                  <h3 className="text-2xl md:text-3xl font-black text-[#e7e6ee] mb-4">The most predictable revenue in detailing.</h3>
                  <p className="text-[#a3a3a3] leading-relaxed mb-6">
                    Fleet accounts are what separates operators from detailers. This pipeline tracks deal stage, fleet size, profit margin, and annualized value for every commercial prospect.
                  </p>
                  <ul className="space-y-2">
                    {['Value/yr calculated per account', 'Stage tracking from target to won', 'Profit and deal score on every row', 'Assign account owners to your team'].map((i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-[#e7e6ee]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5e25fa] shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-center">
                <div className="order-2 lg:order-1">
                  <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-3">Messages</p>
                  <h3 className="text-2xl md:text-3xl font-black text-[#e7e6ee] mb-4">One inbox. Not 12 text threads.</h3>
                  <p className="text-[#a3a3a3] leading-relaxed mb-6">
                    Every lead conversation in one place. The speed-to-lead automation handles the first touchpoint — you pick it up from there with full context on who they are and where they are in the pipeline.
                  </p>
                  <ul className="space-y-2">
                    {['Automated first response under 30 seconds', 'Full conversation history per contact', 'Consumer and fleet leads in one inbox', 'Link directly to pipeline record'].map((i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-[#e7e6ee]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5e25fa] shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                  <Image
                    src="/images/crm-messages.png"
                    alt="DetailPro CRM messages and lead conversations"
                    width={1200}
                    height={750}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050119]/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why they switch ── */}
        <section className="py-20 px-4 bg-[#050119] border-y border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">Why detailers switch</p>
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-12">
              Your current tools are costing you jobs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Leads lost in DMs and texts',
                  desc: "Your personal phone is your CRM. Leads fall through when you're under a car. You can't close jobs you've forgotten about.",
                },
                {
                  title: 'Generic CRMs paywall automation',
                  desc: "Most tools lock follow-up sequences behind $500+/month plans. They treat a $50 wash the same as a $2,000 ceramic coating. DetailPro doesn't.",
                },
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

        {/* ── Social proof numbers ── */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-[#a78bfa] mb-2">$5k → $22k</p>
              <p className="text-[#a3a3a3] text-sm">monthly revenue in 90 days</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#a78bfa] mb-2">&lt; 30s</p>
              <p className="text-[#a3a3a3] text-sm">speed-to-lead response time</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#a78bfa] mb-2">30 days</p>
              <p className="text-[#a3a3a3] text-sm">to first fleet account closed</p>
            </div>
          </div>
        </section>

        {/* ── Pricing nudge ── */}
        <section className="py-16 px-4 bg-[#050119]">
          <div className="max-w-lg mx-auto text-center">
            <p className="text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-6">Pricing</p>
            <p className="text-[#e7e6ee] text-lg font-semibold mb-2">$197/month. No setup fee. No contract.</p>
            <p className="text-[#a3a3a3] text-sm mb-6">Cancel anytime. Bundled free if you're on ads management.</p>
            <Link
              href="https://www.detailprocrm.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/15 hover:border-[#5e25fa]/50 text-[#e7e6ee] font-semibold px-8 py-3 rounded-full text-sm transition-all hover:bg-white/5"
            >
              Start your 7-day free trial →
            </Link>
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

        {/* ── Final CTA ── */}
        <section className="py-24 px-4 bg-[#050119]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Ready to run a real operation?</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#e7e6ee] mb-4 leading-tight">
              See exactly what the CRM
              <br />does for your shop.
            </h2>
            <p className="text-[#a3a3a3] mb-10 max-w-xl mx-auto">
              Book a free demo. We'll walk through the full platform, show you how the pipelines are set up, and tell you honestly if it's the right fit.
            </p>
            <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-bold px-12 py-5 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.5)] text-lg mb-5">
              Book a Free CRM Demo
            </CalendlyButton>
            <p className="text-[#a3a3a3] text-sm">
              Skip the call?{' '}
              <Link
                href="https://www.detailprocrm.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e7e6ee]/70 underline underline-offset-2 hover:text-[#e7e6ee] transition-colors"
              >
                Start your 7-day free trial →
              </Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
