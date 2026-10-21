import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQItem from '@/components/ui/FAQItem';

// Hidden archive of the original system page: reachable only by typing /software.
// Not indexed, not in the sitemap, and not linked from anywhere on the site.
export const metadata: Metadata = {
  title: 'CRM Software',
  robots: { index: false, follow: false },
};

const faqs = [
  {
    question: 'How is this different from an agency or a CRM?',
    answer:
      "Agencies sell leads. CRMs sell software. Courses sell information. None of them is tied to your results. Service Pro installs the whole system (ads, 24/7 call answering, booking, and follow-up) and runs it after launch. Our share comes out of your revenue, so we only win when you do.",
  },
  {
    question: 'What does the system include?',
    answer:
      "A website built to turn local searches into booked calls, your Google Business Profile and reviews, Google and Meta ads, an AI voice agent that answers every call 24/7, and a CRM that handles booking, rebooking, review requests, and past-customer reactivation. You also get mentorship and playbooks for pricing, first hires, and operations.",
  },
  {
    question: 'How long does it take to launch?',
    answer:
      "Four weeks. Week one we build the website, Google profile, phone numbers, and CRM. Week two we connect it to how your business runs. Week three ads and call answering go live. Week four we train you and hand it off, and the automations take over.",
  },
  {
    question: 'Do you take equity?',
    answer:
      "No. You keep 100% of your business, your brand, and every decision. No equity, ever, and no retainer.",
  },
  {
    question: 'What does it cost?',
    answer:
      "We get paid when you get paid. There is a one-time buildout and a monthly infrastructure fee, plus a share of revenue. In a month with no revenue, our share is zero. We walk through the exact numbers on your application call.",
  },
  {
    question: 'Does this only work for detailing?',
    answer:
      "No. Detailing is the example on this page because it's the business our founder built. The same system runs HVAC, plumbing, roofing, lawn care, pool cleaning, pressure washing, window cleaning, and more. We only take one partner per trade in each market.",
  },
];

export default function SoftwarePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative bg-[#050119] overflow-hidden pt-24 pb-0 px-4">
          {/* Glows */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#5e25fa]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#280aa5]/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_600px] gap-12 xl:gap-20 items-end">

              {/* ── Left: text ── */}
              <div className="pb-20">
                <span className="inline-block bg-[#5e25fa]/15 border border-[#5e25fa]/30 text-[#a78bfa] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                  The Service Pro System
                </span>
                <h1 className="text-5xl md:text-6xl xl:text-[68px] font-black text-[#e7e6ee] mb-6 leading-[1.05] tracking-tight">
                  We run the
                  <br />
                  office. You run
                  <br />
                  <span className="text-[#5e25fa]">the crews.</span>
                </h1>
                <p className="text-[#a3a3a3] text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                  Ads bring the calls. We answer every one, book the job, and bring the customer back. Here it is running inside a detailing company.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                  <Link
                    href="/apply"
                    className="inline-block bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-bold px-9 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.45)] text-base"
                  >
                    Get the System
                  </Link>
                  <a
                    href="#inside-the-system"
                    className="inline-flex items-center gap-2 border border-white/15 hover:border-[#5e25fa]/40 text-[#e7e6ee] font-semibold px-9 py-4 rounded-full text-base transition-all hover:bg-white/5"
                  >
                    See Inside
                  </a>
                </div>

                {/* Trust row */}
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {['You keep 100%', 'No equity', 'No retainer'].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-[#a3a3a3] text-sm">
                      <svg className="w-3.5 h-3.5 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: stacked screenshots ── */}
              <div className="relative hidden lg:block h-[540px]">
                {/* Bottom card — consumer pipeline, offset back */}
                <div className="absolute bottom-0 right-0 w-[92%] rounded-xl overflow-hidden border border-white/8 shadow-2xl shadow-black/70"
                  style={{ transform: 'perspective(1200px) rotateY(-4deg) rotateX(2deg) translateY(40px)', transformOrigin: 'right bottom' }}>
                  <Image
                    src="/images/software/servicepro-crm-consumer-pipeline-kanban.webp"
                    alt="Example consumer pipeline board inside the Service Pro system for a detailing company"
                    width={1200}
                    height={600}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050119]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Top card — dashboard, foreground */}
                <div className="absolute top-0 left-0 w-[90%] rounded-xl overflow-hidden border border-[#5e25fa]/30 shadow-[0_0_60px_rgba(94,37,250,0.2)] shadow-black/60"
                  style={{ transform: 'perspective(1200px) rotateY(-4deg) rotateX(2deg)', transformOrigin: 'left top' }}>
                  <Image
                    src="/images/software/servicepro-crm-dashboard-revenue-leads-pipeline.webp"
                    alt="Example dashboard inside the Service Pro system for a detailing company"
                    width={1200}
                    height={600}
                    className="w-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#050119]/40 pointer-events-none" />
                </div>

                {/* Floating stat badge */}
                <div className="absolute bottom-12 -left-4 bg-[#0d0630]/90 backdrop-blur-sm border border-[#5e25fa]/30 rounded-2xl px-4 py-3 shadow-xl z-10">
                  <p className="text-[#a78bfa] text-xs font-semibold uppercase tracking-widest mb-1">Every call answered</p>
                  <p className="text-[#e7e6ee] text-2xl font-black">24/7</p>
                  <p className="text-[#a3a3a3] text-xs">AI voice agent books the job</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Who it's for / not for ── */}
        <section className="py-20 px-4 bg-[#050119] border-b border-white/6">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-12">Know before you apply</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* For */}
              <div className="bg-[#5e25fa]/8 border border-[#5e25fa]/25 rounded-3xl p-8">
                <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-5">This is built for you if</p>
                <ul className="space-y-4">
                  {[
                    "You run a local service business, or you're ready to start one full-time",
                    "Calls go to voicemail while you're under a car or on a roof",
                    "Your jobs live in texts, a notes app, and your memory",
                    "You want a real company, not another job",
                    "You're coachable and willing to change how the business runs",
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
                    "You want a side hustle with no plan to build a company",
                    "You want leads dropped on you with no system to close them",
                    "You can't commit full-time to building the business",
                    "You want a course, not a partner who builds it with you",
                    "You'd rather keep running the business off your cell phone",
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
        <section id="inside-the-system" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">Inside the system, running a detailing company</p>
              <h2 className="text-3xl md:text-5xl font-black text-[#e7e6ee]">The machine behind the calls.</h2>
            </div>

            {/* Dashboard */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                  <Image
                    src="/images/software/servicepro-crm-dashboard-revenue-leads-pipeline.webp"
                    alt="Example dashboard for a detailing company showing active leads, monthly revenue, win rate, and pipeline value"
                    width={1200}
                    height={600}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050119]/40 to-transparent pointer-events-none" />
                </div>
                <div>
                  <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-3">Dashboard</p>
                  <h3 className="text-2xl md:text-3xl font-black text-[#e7e6ee] mb-4">Your whole business at a glance.</h3>
                  <p className="text-[#a3a3a3] leading-relaxed mb-6">
                    Active leads, monthly revenue, win rate, and pipeline value, live in one place. This is a detailing company's dashboard. Yours is set up for your trade.
                  </p>
                  <ul className="space-y-2">
                    {['Live pipeline value', 'Most requested services', 'Top commercial accounts ranked by yearly value', "Today's tasks"].map((i) => (
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
                    Ads bring the leads. Every one lands on the board, gets booked, and moves stage by stage without living in your head. In this detailing example, service, vehicle, value, and last contact date sit on every card.
                  </p>
                  <ul className="space-y-2">
                    {['Ceramic, PPF, and maintenance jobs tracked separately', 'Lead score visible on every card', 'Assign jobs to your crew', 'One-click move between stages'].map((i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-[#e7e6ee]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5e25fa] shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                  <Image
                    src="/images/software/servicepro-crm-consumer-pipeline-kanban.webp"
                    alt="Example consumer pipeline kanban board for a detailing company, showing leads by stage"
                    width={1200}
                    height={600}
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
                    src="/images/software/servicepro-crm-fleet-commercial-pipeline.webp"
                    alt="Example fleet and commercial pipeline for a detailing company, showing deal stage and yearly value per account"
                    width={1200}
                    height={600}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050119]/40 to-transparent pointer-events-none" />
                </div>
                <div>
                  <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-3">Commercial Accounts</p>
                  <h3 className="text-2xl md:text-3xl font-black text-[#e7e6ee] mb-4">The repeat work that fills the schedule.</h3>
                  <p className="text-[#a3a3a3] leading-relaxed mb-6">
                    Commercial accounts get their own board, with deal stage, fleet size, margin, and yearly value for every prospect. A detailing company tracks dealerships and rental fleets here. Your trade tracks its own.
                  </p>
                  <ul className="space-y-2">
                    {['Yearly value calculated per account', 'Stage tracking from target to won', 'Profit and deal score on every row', 'Assign account owners to your team'].map((i) => (
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
                    Every call and text lands in one place. The system answers first, day or night. You pick it up from there knowing who they are and where they stand.
                  </p>
                  <ul className="space-y-2">
                    {['Instant first response to every new lead', 'Full conversation history per contact', 'Consumer and commercial leads in one inbox', 'Link directly to the pipeline record'].map((i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-[#e7e6ee]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5e25fa] shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                  <Image
                    src="/images/software/servicepro-crm-messages-lead-conversations.webp"
                    alt="Example inbox for a detailing company showing lead conversations linked to the pipeline"
                    width={1200}
                    height={600}
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
            <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">Why owners apply</p>
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-12">
              Your current setup is costing you jobs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'The phone rings while you\'re on a roof',
                  desc: "Your cell is the front desk. Calls go to voicemail while the crew works, and the customer calls the next name on Google.",
                },
                {
                  title: 'Nobody builds the whole machine',
                  desc: "Agencies send leads. CRMs sell software. Courses teach you how. None of them is tied to your results, so you carry all the risk. We only get paid when you do.",
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
            <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Ready to build a real company?</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#e7e6ee] mb-4 leading-tight">
              Get the system
              <br />that runs the office.
            </h2>
            <p className="text-[#a3a3a3] mb-10 max-w-xl mx-auto">
              We only take owners we believe will succeed, and one partner per trade in each market. If we don&apos;t think it&apos;s a fit, we&apos;ll tell you.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-bold px-12 py-5 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.5)] text-lg mb-5"
            >
              Apply Now
            </Link>
            <p className="text-[#a3a3a3] text-sm">One market. Then another. Then another.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
