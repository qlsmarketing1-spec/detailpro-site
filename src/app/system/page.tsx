import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';
import FAQItem from '@/components/ui/FAQItem';
import { HOME_FAQS, faqJsonLd } from '@/data/faqs';

const DESCRIPTION =
  'We run the office. You run the crews. Service Pro builds the whole system of a local service business in four weeks, runs it, and gets paid when you get paid.';

export const metadata: Metadata = {
  title: 'The System',
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.detailpro.tech/system' },
  openGraph: {
    title: 'The System | Service Pro',
    description: DESCRIPTION,
    url: 'https://www.detailpro.tech/system',
    images: ['/og/system.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/og/system.jpg'] },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Service Pro System',
  description: DESCRIPTION,
  url: 'https://www.detailpro.tech/system',
  provider: { '@id': 'https://www.detailpro.tech/#organization' },
  areaServed: { '@type': 'Country', name: 'US' },
};

const KICKER = 'text-[#5e25fa] font-semibold uppercase tracking-widest text-xs';
const FRAME = 'relative overflow-hidden rounded-[1.75rem] border border-black/10 shadow-xl shadow-black/5 bg-[#f3f2f8]';
const FOCUS = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5e25fa] focus-visible:ring-offset-2';
const PRIMARY_BTN = `inline-flex items-center justify-center bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-[0_0_40px_rgba(94,37,250,0.4)] active:scale-95 ${FOCUS}`;

/* Hero illustration: one example evening of the loop. Not a real record. */
const DAY = [
  { time: '9:14 PM', title: 'A call comes in', body: 'A new customer asks about an interior detail. You are off the clock.' },
  { time: '9:14 PM', title: 'Answered by the AI voice agent', body: 'Service area checked. Questions answered. No voicemail.' },
  { time: '9:17 PM', title: 'Job booked', body: 'Saturday, 10:00 AM. It is on the schedule before you see it.' },
  { time: 'Saturday', title: 'Review requested', body: 'Sent once the job is marked done.' },
  { time: 'Weeks later', title: 'Customer rebooked', body: 'Asked back automatically, before they drift.' },
];

const CONTRAST = [
  { without: 'The phone rings while you’re on a roof. It goes to voicemail.', with: 'Every call answered, 24/7. Even at 9 p.m.' },
  { without: 'Jobs live in text threads and your memory.', with: 'Every job booked onto one schedule.' },
  { without: 'Past customers drift to whoever calls them first.', with: 'Every past customer asked back before they drift.' },
  {
    without: 'An agency, a CRM, and a course. None of them tied to your results.',
    with: 'One connected system. We get paid when you get paid.',
  },
];

const LOOP = [
  { n: '01', title: 'Ads bring the leads', body: 'Google and Meta ads, scaled up or down with your schedule.' },
  { n: '02', title: 'Every call answered', body: 'An AI voice agent picks up 24/7, day or night.' },
  { n: '03', title: 'Jobs get booked', body: 'Straight onto the schedule, without you in the office.' },
  { n: '04', title: 'Customers come back', body: 'Automations rebook the job and ask for the review.' },
  { n: '05', title: 'Past customers return', body: 'Reactivation reaches the ones who went quiet.' },
];

const INCLUDED = [
  {
    title: 'Get found',
    icon: 'M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z',
    items: [
      'A website built to turn local searches into booked calls',
      'Google Business Profile, reviews, and Local Services Ads',
      'SEO and AEO, so you show up in AI search too',
    ],
  },
  {
    title: 'Get the calls',
    icon: 'M3 11l18-8-8 18-2-8-8-2z',
    items: ['Google and Meta ads', 'Bids that scale up or down with your schedule'],
  },
  {
    title: 'Answer every call',
    icon: 'M3 5a2 2 0 012-2h2.3a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.5 1.2l-1.6.8a11 11 0 005.8 5.8l.8-1.6a1 1 0 011.2-.5l3.3 1.1a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z',
    items: ['An AI voice agent that answers 24/7', 'It checks the service area and books the job'],
  },
  {
    title: 'Keep them coming back',
    icon: 'M4 4v6h6M20 20v-6h-6M20 10a8 8 0 00-14.9-3M4 14a8 8 0 0014.9 3',
    items: ['A CRM with rebooking, review requests, and past-customer reactivation', 'A referral engine'],
  },
  {
    title: 'Run it right',
    icon: 'M9 12l2 2 4-4M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z',
    items: ['Books and legal partners from day one'],
  },
  {
    title: 'Learn as you build',
    icon: 'M12 6.5C10.5 5 8 4.5 4 5v13c4-.5 6.5 0 8 1.5m0-13c1.5-1.5 4-2 8-1.5v13c-4-.5-6.5 0-8 1.5m0-13v13',
    items: [
      'Mentorship and playbooks for pricing, first hires, and operations',
      'New owners also get help closing their first jobs',
    ],
  },
];

const WEEKS = [
  { week: 'Week 1', stage: 'Build', body: 'Website, Google profile, phone numbers, CRM, pricing, and service area.' },
  { week: 'Week 2', stage: 'Connect', body: 'Systems plugged into how your business runs. Call scripts, booking rules, and ad tracking.' },
  { week: 'Week 3', stage: 'Launch', body: 'Ads and call answering go live. Leads flow into the CRM.' },
  { week: 'Week 4', stage: 'Hand off', body: 'Owner training, dashboards, and a weekly rhythm. Automations take over.' },
];

/*
 * ── Pricing ──
 * Everything price-related on this page lives in PRICING,
 * ALTERNATIVES and <PricingSection />. To hide pricing, remove <PricingSection />
 * from the page below. Figures follow the Copywriting Bible pricing table.
 */
const PRICING = [
  { name: 'Buildout', price: '$4,500', unit: 'one-time', covers: 'The 4-week setup, training, and launch.' },
  { name: 'Infrastructure', price: '$250', unit: 'per month', covers: 'Software, call answering, hosting, and upkeep.' },
];


const ALTERNATIVES = [
  { name: 'An office hire', price: '$4,300 to $5,400', unit: 'a month', line: 'Can’t answer the phone at 9 p.m.' },
  { name: 'A franchise', price: '6-figures', unit: 'to start', line: 'You give up your independence.' },
  { name: 'An agency', price: '$2,000 to $5,000', unit: 'a month', line: 'Paid whether you win or not.' },
  { name: 'A course', price: '$1,000 to $5,000', unit: 'up front', line: 'Teaches you, then leaves you alone.' },
];

const TRADES = ['HVAC', 'Plumbing', 'Roofing', 'Lawn care', 'Pool cleaning', 'Pressure washing', 'Window cleaning', 'Detailing'];

const OWNERS = [
  {
    label: 'New Owners',
    title: 'Starting out, or in your first two years.',
    body: 'Start with the system the big players already have, instead of building it one mistake at a time.',
    criteria: ['At least $6,000, through personal funds or financing', 'A full-time commitment', 'Coachability', 'A trade we build in'],
  },
  {
    label: 'Established Owners',
    title: 'You’ve already proven the business works.',
    body: 'Build a business that runs without you, and is worth more because of it.',
    criteria: ['Doing $15,000 or more a month', 'Willing to change how the business runs'],
  },
];

function Icon({ d, className = 'w-5 h-5' }: { d: string; className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

function Check({ className = 'text-[#5e25fa]' }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 mt-1 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PricingSection() {
  return (
    <section aria-labelledby="pricing-heading" className="relative overflow-hidden px-6 py-20 md:py-28 bg-[#f3effe] border-y border-[#5e25fa]/15">
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-[#5e25fa]/12 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 md:mb-16">
          <Reveal className="lg:col-span-7">
            <p className={`${KICKER} mb-4`}>How we get paid</p>
            <h2 id="pricing-heading" className="font-serif text-4xl md:text-6xl font-medium text-[#050119] leading-[1.04] tracking-tight">
              We get paid when <span className="text-[#5e25fa]">you get paid.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:pt-10" delay={80}>
            <p className="text-[#050119] text-lg font-semibold leading-relaxed mb-3">
              You keep 100% of your business. No equity, no retainer.
            </p>
            <p className="text-[#6b6b76] leading-relaxed">
              Most of what we earn is a share of your revenue. In a month with no revenue, our share is zero.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {PRICING.map((p, i) => (
              <Reveal key={p.name} delay={i * 80} className="h-full">
                <div className="h-full bg-white border border-black/10 rounded-3xl p-7 flex flex-col">
                  <div className="flex items-baseline justify-between gap-4 mb-5">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#6b6b76] font-semibold">{p.name}</p>
                    <p className="text-[#5e25fa] font-semibold text-sm">{p.unit}</p>
                  </div>
                  <p className="font-serif text-5xl md:text-6xl text-[#050119] leading-none tracking-tight mb-5">{p.price}</p>
                  <p className="mt-auto text-[#6b6b76] text-sm leading-relaxed border-t border-black/10 pt-4">{p.covers}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="lg:col-span-7 h-full">
            <div className="h-full bg-[#050119] rounded-3xl p-7 md:p-8 flex flex-col relative overflow-hidden">
              <div className="absolute -bottom-24 -right-16 w-[340px] h-[340px] bg-[#5e25fa]/30 rounded-full blur-[110px] pointer-events-none" aria-hidden="true" />
              <div className="relative flex flex-col h-full">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#a78bfa] font-semibold mb-6">Revenue share</p>
                <p className="font-serif text-2xl md:text-3xl text-[#e7e6ee] leading-snug mb-8">
                  Our share of the growth we help create.
                </p>

                <div className="flex items-end gap-4">
                  <p className="font-serif text-8xl md:text-9xl text-[#e7e6ee] leading-[0.85] tracking-tight">10%</p>
                  <p className="pb-2 text-[#a78bfa] font-semibold">of revenue</p>
                </div>

                <p className="mt-auto pt-8 text-sm text-[#e7e6ee]/70 leading-relaxed">
                  For new owners. The revenue share is different for established owners, and we&apos;ll walk through it on your discovery call.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="bg-white border border-black/10 rounded-3xl p-7 md:p-9">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
              <h3 className="font-serif text-2xl md:text-3xl text-[#050119] tracking-tight">Compare it to the alternatives.</h3>
              <p className="text-sm text-[#6b6b76]">Not to zero.</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 rounded-2xl overflow-hidden border border-black/10">
              {ALTERNATIVES.map((a) => (
                <li key={a.name} className="bg-white p-5 md:p-6">
                  <p className="text-sm font-semibold text-[#6b6b76] mb-2">{a.name}</p>
                  <p className="text-[#050119] leading-tight mb-2">
                    <strong className="font-bold text-xl md:text-2xl tracking-tight">{a.price}</strong>{' '}
                    <span className="text-sm text-[#6b6b76] whitespace-nowrap">{a.unit}</span>
                  </p>
                  <p className="text-sm text-[#6b6b76] leading-relaxed">{a.line}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[#050119] font-semibold">
              Service Pro builds the whole system, runs it after launch, and our share is zero unless revenue comes in.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function SystemPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(HOME_FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Navbar />
      <main className="bg-white">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-black/10">
          <div className="absolute -top-40 -left-32 w-[700px] h-[700px] bg-[#5e25fa]/12 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#280aa5]/8 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(to right, #050119 1px, transparent 1px), linear-gradient(to bottom, #050119 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-16 md:pb-24">
            <div className="flex items-center justify-between gap-4 border-b border-black/12 pb-4 mb-12 md:mb-16">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#6b6b76] font-semibold">The Offer</span>
              <span className="hidden md:block h-px flex-1 bg-black/10" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#6b6b76] font-semibold">MMXXVI</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <p className={`${KICKER} mb-5`}>The Service Pro System</p>
                <h1 className="font-serif text-[44px] sm:text-6xl xl:text-[80px] font-medium text-[#050119] leading-[1.0] tracking-tight mb-7">
                  We run the office.
                  <br />
                  <span className="text-[#5e25fa]">You run the crews.</span>
                </h1>
                <p className="text-[#6b6b76] text-lg md:text-xl leading-relaxed max-w-xl mb-9">
                  Service Pro builds the whole operating system of a local service business in four weeks. Then we run it. Most of what we earn is a share of your revenue, so we win when you do.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center mb-10">
                  <Link href="/apply" className={`${PRIMARY_BTN} text-lg`}>
                    Get the System
                  </Link>
                  <a
                    href="#inside"
                    className={`inline-flex items-center justify-center gap-2 border border-black/15 hover:border-[#5e25fa]/50 hover:text-[#5e25fa] text-[#050119] font-semibold px-8 py-4 rounded-full transition-colors ${FOCUS}`}
                  >
                    See what&apos;s inside
                    <Icon d="M12 5v14m0 0l-6-6m6 6l6-6" className="w-4 h-4" />
                  </a>
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#050119]">
                  {['You keep 100%', 'No equity', 'No retainer'].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5e25fa]" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* One evening of the loop (illustration) */}
              <div className="lg:col-span-5">
                <figure className="relative bg-white/85 backdrop-blur-sm border border-black/10 rounded-[1.75rem] shadow-2xl shadow-[#5e25fa]/10 p-6 md:p-8">
                  <div className="flex items-center justify-between gap-3 mb-7">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#050119] font-semibold">One evening of the loop</p>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5e25fa] bg-[#5e25fa]/8 border border-[#5e25fa]/20 rounded-full px-2.5 py-1">
                      Illustration
                    </span>
                  </div>
                  <ol className="relative">
                    <span className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#5e25fa] via-[#a78bfa] to-[#5e25fa]/10" aria-hidden="true" />
                    {DAY.map((d, i) => (
                      <li key={d.title} className={`relative pl-9 ${i < DAY.length - 1 ? 'pb-6' : ''}`}>
                        <span
                          className={`absolute left-0 top-1 w-[15px] h-[15px] rounded-full border-2 border-[#5e25fa] ${i === 2 ? 'bg-[#5e25fa]' : 'bg-white'}`}
                          aria-hidden="true"
                        />
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#6b6b76] font-semibold mb-1">{d.time}</p>
                        <p className="font-bold text-[#050119] leading-snug">{d.title}</p>
                        <p className="text-sm text-[#6b6b76] leading-relaxed">{d.body}</p>
                      </li>
                    ))}
                  </ol>
                  <figcaption className="mt-7 pt-4 border-t border-black/10 text-xs text-[#6b6b76]">
                    Example for illustration only. Not a real customer record.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ── The problem ── */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-16">
              <Reveal className="lg:col-span-7">
                <p className={`${KICKER} mb-4`}>The problem</p>
                <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#050119] leading-[1.04] tracking-tight">
                  The phone rings while you&apos;re on a roof.
                </h2>
              </Reveal>
              <Reveal className="lg:col-span-5 lg:pt-10" delay={80}>
                <p className="text-[#050119] text-lg md:text-xl leading-relaxed mb-4">
                  A dispatcher picks up while their crews are working. Yours goes to voicemail.
                </p>
                <p className="text-[#6b6b76] leading-relaxed">
                  The big players in your market don&apos;t outwork you. They out-system you.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 rounded-[1.75rem] border border-black/10 overflow-hidden">
                <div className="bg-[#f7f6fb] p-7 md:p-10">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#6b6b76] font-semibold mb-7">Without a system</p>
                  <ul className="space-y-6">
                    {CONTRAST.map((c) => (
                      <li key={c.without} className="flex gap-3 text-[#6b6b76] leading-relaxed">
                        <svg className="w-4 h-4 mt-1 shrink-0 text-[#6b6b76]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {c.without}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-7 md:p-10 border-t md:border-t-0 md:border-l border-black/10 relative overflow-hidden">
                  <div className="absolute -bottom-24 -right-24 w-[320px] h-[320px] bg-[#5e25fa]/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
                  <p className="relative text-[11px] uppercase tracking-[0.25em] text-[#5e25fa] font-semibold mb-7">With Service Pro</p>
                  <ul className="relative space-y-6">
                    {CONTRAST.map((c) => (
                      <li key={c.with} className="flex gap-3 text-[#050119] font-semibold leading-relaxed">
                        <Check />
                        {c.with}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── The loop ── */}
        <section className="px-6 py-24 md:py-32 bg-[#050119] relative overflow-hidden">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#5e25fa]/15 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] bg-[#280aa5]/25 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto">
            <Reveal className="max-w-3xl mb-14 md:mb-20">
              <p className="text-[#a78bfa] font-semibold uppercase tracking-widest text-xs mb-4">The mechanism</p>
              <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#e7e6ee] leading-[1.04] tracking-tight mb-6">
                One loop. It runs while you work.
              </h2>
              <p className="text-[#a3a3a3] text-lg leading-relaxed">
                Ads bring the calls. We answer every one, book the job, and bring the customer back. The loop runs on its own after launch, and we maintain it behind the scenes.
              </p>
            </Reveal>

            <ol className="relative grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-4">
              {/* Connector: vertical on mobile, horizontal on desktop */}
              <span className="lg:hidden absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-[#a78bfa]/70 to-[#a78bfa]/20" aria-hidden="true" />
              <span className="hidden lg:block absolute left-[10%] right-[10%] top-[27px] h-px bg-gradient-to-r from-[#a78bfa]/70 via-[#a78bfa]/40 to-[#a78bfa]/70" aria-hidden="true" />
              {LOOP.map((s, i) => (
                <li key={s.n} className="relative">
                  <Reveal delay={i * 90} className="flex lg:flex-col lg:items-center lg:text-center gap-5 lg:gap-0 pb-9 lg:pb-0">
                    <span
                      className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-[#050119] border border-[#a78bfa]/50 flex items-center justify-center font-serif text-xl text-[#e7e6ee] shadow-[0_0_30px_rgba(94,37,250,0.35)] lg:mb-6"
                      aria-hidden="true"
                    >
                      {s.n}
                    </span>
                    <div className="pt-2 lg:pt-0">
                      <h3 className="text-[#e7e6ee] font-bold text-lg mb-1.5">{s.title}</h3>
                      <p className="text-[#a3a3a3] text-sm leading-relaxed lg:max-w-[200px] lg:mx-auto">{s.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            {/* Loop-back cue */}
            <div className="hidden lg:block relative mx-[10%] mt-8 h-14 border-x border-b border-dashed border-[#a78bfa]/45 rounded-b-3xl" aria-hidden="true">
              <svg className="absolute -left-[7px] -top-2 w-[14px] h-[14px] text-[#a78bfa]" viewBox="0 0 14 14" fill="currentColor">
                <path d="M7 0l7 9H0z" />
              </svg>
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-[#050119] px-4 text-[11px] uppercase tracking-[0.25em] text-[#a78bfa] font-semibold">
                Back to more jobs
              </span>
            </div>
            <p className="lg:hidden flex items-center gap-3 text-sm font-semibold text-[#a78bfa] pl-[14px]">
              <Icon d="M4 4v6h6M20 20v-6h-6M20 10a8 8 0 00-14.9-3M4 14a8 8 0 0014.9 3" className="w-7 h-7 shrink-0" />
              Then back to step 01, with more jobs.
            </p>
            <p className="sr-only">After step five, the loop starts again with more jobs.</p>
          </div>
        </section>

        {/* ── What's included ── */}
        <section id="inside" className="scroll-mt-20 px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <div className="max-w-2xl">
                <p className={`${KICKER} mb-4`}>What&apos;s inside</p>
                <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#050119] leading-[1.04] tracking-tight">
                  Not a website, ads, and a CRM. <span className="text-[#5e25fa]">The whole machine.</span>
                </h2>
              </div>
              <p className="text-[#6b6b76] leading-relaxed max-w-sm">
                Every part is connected to the next. Here&apos;s what we build, grouped by the job it does for your business.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INCLUDED.map((g, i) => (
                <Reveal key={g.title} delay={(i % 3) * 80} className="h-full">
                  <div className="h-full bg-white border border-black/10 rounded-3xl p-7 transition-colors hover:border-[#5e25fa]/30">
                    <div className="flex items-center justify-between mb-8">
                      <span className="w-11 h-11 rounded-2xl bg-[#5e25fa]/8 border border-[#5e25fa]/15 text-[#5e25fa] flex items-center justify-center">
                        <Icon d={g.icon} />
                      </span>
                      <span className="font-serif text-3xl text-transparent select-none" style={{ WebkitTextStroke: '1px rgba(94,37,250,0.45)' }} aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-[28px] text-[#050119] tracking-tight mb-4">{g.title}</h3>
                    <ul className="space-y-2.5">
                      {g.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-[#050119]/75 leading-relaxed">
                          <Check />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── The 4-week buildout ── */}
        <section className="px-6 py-20 md:py-28 bg-[#f7f6fb] border-y border-black/10">
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-3xl mb-14 md:mb-16">
              <p className={`${KICKER} mb-4`}>The buildout</p>
              <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#050119] leading-[1.04] tracking-tight mb-5">
                Four weeks to build it. Then we run it.
              </h2>
              <p className="text-[#6b6b76] text-lg leading-relaxed">
                You keep doing the work you&apos;re great at. We build the system around it, one week at a time.
              </p>
            </Reveal>

            <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-5">
              <span className="md:hidden absolute left-[7px] top-2 bottom-2 w-px bg-[#5e25fa]/30" aria-hidden="true" />
              <span className="hidden md:block absolute left-0 right-0 top-[7px] h-px bg-[#5e25fa]/30" aria-hidden="true" />
              {WEEKS.map((w, i) => (
                <li key={w.stage} className="relative pl-9 md:pl-0 pb-8 md:pb-0">
                  <Reveal delay={i * 90}>
                    <span className="absolute left-0 md:static block w-[15px] h-[15px] rounded-full bg-[#5e25fa] ring-4 ring-[#f7f6fb] md:mb-7" aria-hidden="true" />
                    <div className="bg-white border border-black/10 rounded-3xl p-6 md:min-h-[230px]">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-[#6b6b76] font-semibold mb-3">{w.week}</p>
                      <h3 className="font-serif text-3xl text-[#050119] tracking-tight mb-3">{w.stage}</h3>
                      <p className="text-sm text-[#6b6b76] leading-relaxed">{w.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal className="mt-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-[#050119] rounded-3xl p-7 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#a78bfa] font-semibold shrink-0">After week 4</p>
                <p className="text-[#e7e6ee] text-lg leading-relaxed">
                  We run it. The loop keeps going, and we maintain it behind the scenes while you run the crews.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <PricingSection />

        {/* ── Who we take ── */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-16">
              <Reveal className="lg:col-span-7">
                <p className={`${KICKER} mb-4`}>Who we take</p>
                <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#050119] leading-[1.04] tracking-tight">
                  One partner per trade in each market.
                </h2>
              </Reveal>
              <Reveal className="lg:col-span-5 lg:pt-10" delay={80}>
                <p className="text-[#6b6b76] text-lg leading-relaxed">
                  We only take owners we believe will succeed. If we don&apos;t think it&apos;s a fit, we&apos;ll tell you.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {OWNERS.map((o, i) => (
                <Reveal key={o.label} delay={i * 80} className="h-full">
                  <div className="h-full border border-black/10 rounded-[1.75rem] p-7 md:p-9 bg-white relative overflow-hidden">
                    <span
                      className="absolute right-6 top-2 font-serif text-[140px] leading-none text-transparent select-none pointer-events-none"
                      style={{ WebkitTextStroke: '1px rgba(94,37,250,0.12)' }}
                      aria-hidden="true"
                    >
                      {i === 0 ? 'A' : 'B'}
                    </span>
                    <p className={`${KICKER} mb-4 relative`}>{o.label}</p>
                    <h3 className="relative font-serif text-2xl md:text-3xl text-[#050119] tracking-tight leading-snug mb-3">{o.title}</h3>
                    <p className="relative text-[#6b6b76] leading-relaxed mb-7">{o.body}</p>
                    <p className="relative text-[11px] uppercase tracking-[0.25em] text-[#6b6b76] font-semibold mb-3">We look for</p>
                    <ul className="relative space-y-2.5">
                      {o.criteria.map((c) => (
                        <li key={c} className="flex gap-2.5 text-[#050119] font-medium">
                          <Check />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#6b6b76] font-semibold mb-4">Trades we build in</p>
              <ul className="flex flex-wrap gap-2">
                {TRADES.map((t) => (
                  <li key={t} className="text-sm font-semibold text-[#050119] border border-black/10 bg-[#f7f6fb] rounded-full px-4 py-2">
                    {t}
                  </li>
                ))}
                <li className="text-sm font-semibold text-[#5e25fa] border border-dashed border-[#5e25fa]/50 bg-[#f3effe] rounded-full pl-3 pr-4 py-2 inline-flex items-center gap-1.5">
                  <span aria-hidden="true" className="text-base leading-none">+</span>
                  More
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── Proof: built first in detailing ── */}
        <section className="px-6 py-20 md:py-28 bg-[#f7f6fb] border-y border-black/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <p className={`${KICKER} mb-4`}>Built first in detailing</p>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#050119] leading-[1.06] tracking-tight mb-6">
                  It started in a detailing business.
                </h2>
                <p className="text-[#6b6b76] leading-relaxed mb-6">
                  Detailing is an old-fashioned industry. Our founder, Brady Schlapkohl, started Shine Squad and applied modern systems to it.
                </p>
                <p className="font-serif text-2xl md:text-[28px] text-[#050119] leading-snug mb-8 border-l-2 border-[#5e25fa] pl-5">
                  Our founder built one of the largest detailing companies in Minneapolis <span className="text-[#5e25fa]">within a year.</span>
                </p>
                <Link href="/case-studies" className={`inline-flex items-center gap-2 text-[#5e25fa] font-semibold hover:underline underline-offset-4 rounded ${FOCUS}`}>
                  See the case studies
                  <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-5 gap-4">
              <Reveal className="col-span-3">
                <div className={`${FRAME} aspect-[4/5]`}>
                  <Image
                    src="/images/clients/shine-squad/shine-squad-technicians-detailing-cars-a-frame-sign.webp"
                    alt="Two Shine Squad technicians detailing a pair of vehicles beside their branded A-frame sign"
                    fill
                    sizes="(max-width: 1024px) 60vw, 35vw"
                    className="object-cover"
                    style={{ objectPosition: '55% 42%' }}
                  />
                </div>
              </Reveal>
              <Reveal className="col-span-2 self-end" delay={100}>
                <div className={`${FRAME} aspect-[3/4]`}>
                  <Image
                    src="/images/clients/shine-squad/shine-squad-technician-machine-polishing-black-hood-in-shop.webp"
                    alt="A Shine Squad technician machine-polishing the hood of a black car in the Shine Squad detailing shop"
                    fill
                    sizes="(max-width: 1024px) 40vw, 24vw"
                    className="object-cover"
                    style={{ objectPosition: '45% 50%' }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className={`${KICKER} mb-4`}>FAQ</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#050119] leading-[1.06] tracking-tight mb-5">
                Owners ask us.
              </h2>
              <p className="text-[#6b6b76] leading-relaxed">The two big ones: do we take equity, and how does the revenue share work. Straight answers below.</p>
            </Reveal>
            <div className="lg:col-span-8 space-y-3">
              {HOME_FAQS.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} theme="light" />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 pb-24 md:pb-32">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center border border-black/10 rounded-[2rem] px-6 py-16 md:py-20 bg-gradient-to-b from-[#f3effe] to-[#f7f6fb] relative overflow-hidden">
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#5e25fa]/15 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
              <div className="relative">
                <p className={`${KICKER} mb-4`}>Apply</p>
                <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#050119] leading-[1.05] tracking-tight mb-5">
                  Get the system that <span className="text-[#5e25fa]">runs the office.</span>
                </h2>
                <p className="text-[#6b6b76] text-lg max-w-xl mx-auto mb-9 leading-relaxed">
                  One partner per trade in each market. You keep 100% of your business. We get paid when you get paid.
                </p>
                <Link href="/apply" className={`${PRIMARY_BTN} text-lg px-10`}>
                  Apply Now
                </Link>
                <p className="mt-10 font-serif italic text-xl text-[#050119]/70">One market. Then another. Then another.</p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
