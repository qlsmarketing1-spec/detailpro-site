import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'One founder, one detailing company, and a market where billions are changing hands. See what modern systems can do for a local service business.',
  alternates: { canonical: 'https://www.detailpro.tech/case-studies' },
  openGraph: {
    title: 'Case Studies | Service Pro',
    description:
      'One founder, one detailing company, and a market where billions are changing hands. See what modern systems can do for a local service business.',
    url: 'https://www.detailpro.tech/case-studies',
    images: ['/og/case-studies.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/og/case-studies.jpg'] },
};

const KICKER = 'text-[#5e25fa] font-semibold uppercase tracking-widest text-xs';
const FRAME = 'relative overflow-hidden rounded-[1.75rem] border border-black/10 shadow-xl shadow-black/5 bg-[#f3f2f8]';

const LOOP = [
  { n: '01', title: 'Ads bring the calls', body: 'Google and Meta ads that scale up or down with the schedule.' },
  { n: '02', title: 'Every call answered', body: 'An AI voice agent picks up 24/7, checks the service area, and books the job.' },
  { n: '03', title: 'Jobs get booked', body: 'Straight onto the calendar, without the owner in the office.' },
  { n: '04', title: 'Customers come back', body: 'Automations rebook, ask for reviews, and reactivate past customers.' },
];

const DEALS = [
  {
    figure: '~$2B',
    title: 'A1 Garage Door Service',
    body: 'KKR agreed to acquire A1 Garage Door Service for around $2 billion, according to Reuters. Tommy Mello founded it in Phoenix in 2007.',
    source: { label: 'Reuters, Sept 2, 2026', href: 'https://www.reuters.com/legal/transactional/kkr-acquire-a1-garage-door-service-around-2-billion-sources-say-2026-09-02/' },
  },
  {
    figure: '$800M+',
    title: 'Guild Garage Group',
    body: 'Earlier in 2026, Oak Hill Capital agreed to acquire Guild Garage Group for more than $800 million.',
    source: { label: 'Reuters, via Outlook Business', href: 'https://www.outlookbusiness.com/corporate/kkr-agrees-to-buy-a1-garage-in-around-2-bn-deal-amid-home-services-ma' },
  },
  {
    figure: '~$40M',
    title: 'Pink’s Window Services',
    body: 'Reportedly started in 2020, reportedly reached $12M+ in revenue, and was reportedly valued near $40 million.',
    source: { label: 'Starter Story, LeadTruffle', href: null },
  },
];

const STATS = [
  { figure: '6 million', body: 'U.S. small businesses are expected to change ownership by 2035.', source: 'McKinsey Institute for Economic Mobility, 2026' },
  { figure: '44.7%', body: 'of privately held businesses with employees are owned by baby boomers.', source: 'Project Equity' },
  { figure: '$3.7T', body: 'is sitting in private equity funds waiting to be spent.', source: 'Landscape Management, July 2026' },
];

const LANDSCAPING_BUYERS = [
  { name: 'CI Capital Partners', count: '26+', line: 'landscaping acquisitions' },
  { name: 'TruArc Partners', count: '13+', line: 'acquisitions' },
  { name: 'Pritzker Private Capital', count: '27+', line: 'acquisitions' },
];

const PORTFOLIO = [
  {
    name: 'Shine Squad',
    line: 'Car and boat detailing',
    img: '/images/clients/shine-squad/shine-squad-technician-machine-polishing-black-hood-in-shop.webp',
    alt: 'A Shine Squad technician machine-polishing the hood of a black car in the shop, in front of the Shine Squad banner',
    w: 1086,
    h: 725,
    pos: '45% 50%',
  },
  {
    name: 'Reset Auto Detailing',
    line: 'Excellence in every detail',
    img: '/images/clients/reset-auto-detailing/reset-auto-detailing-technician-foam-washing-mercedes-suv.webp',
    alt: 'A Reset Auto Detailing technician foam-washing a white Mercedes SUV in a suburban driveway',
    w: 1200,
    h: 678,
    pos: '42% 45%',
  },
  {
    name: 'Spotless Detailing',
    line: 'Car detailing',
    img: '/images/clients/spotless-detailing/spotless-detailing-bmw-suv-foam-wash-driveway.webp',
    alt: 'A foam-covered BMW SUV mid-wash in a residential driveway, with traffic cones marking the work area',
    w: 1200,
    h: 800,
    pos: '45% 55%',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-black/10">
          <div className="absolute -top-40 -left-32 w-[700px] h-[700px] bg-[#5e25fa]/12 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#280aa5]/8 rounded-full blur-[140px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
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
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#6b6b76] font-semibold">Service Pro Case Studies</span>
              <span className="hidden md:block h-px flex-1 bg-black/10" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#6b6b76] font-semibold">MMXXVI</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <h1 className="lg:col-span-8 font-serif text-[42px] md:text-6xl xl:text-[76px] font-medium text-[#050119] leading-[1.02] tracking-tight">
                An old-fashioned industry.
                <br />
                <span className="text-[#5e25fa]">A modern system.</span>
              </h1>
              <p className="lg:col-span-4 text-[#6b6b76] text-base leading-relaxed max-w-sm lg:pb-3">
                One founder proved it in his own hometown. Now the money is moving into local services, and the businesses built on systems are the ones that capture it.
              </p>
            </div>
          </div>
        </section>

        {/* ── Case 01: Shine Squad ── */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <Reveal>
                <p className={`${KICKER} mb-4`}>Case 01 · The founder</p>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#050119] leading-[1.08] tracking-tight mb-8">
                  Shine Squad.
                </h2>
                <div className="space-y-7">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#6b6b76] font-semibold mb-2">The situation</p>
                    <p className="text-[#050119]/80 leading-relaxed">
                      Detailing is an old-fashioned industry. The biggest players in Minneapolis looked untouchable, and most owners run on memory, text threads, and a cell phone.
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#6b6b76] font-semibold mb-2">The move</p>
                    <p className="text-[#050119]/80 leading-relaxed">
                      Two years ago, Brady Schlapkohl started Shine Squad. His edge wasn&apos;t working harder. It was applying modern systems to an industry that had never used them.
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#6b6b76] font-semibold mb-2">The proof point</p>
                    <p className="font-serif text-2xl md:text-[28px] text-[#050119] leading-snug">
                      One of the largest detailing companies in Minneapolis, <span className="text-[#5e25fa]">within a year.</span>
                    </p>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-black/10 flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#5e25fa]/25 shrink-0">
                    <Image
                      src="/images/team/brady-schlapkohl-founder-service-pro.webp"
                      alt="Brady Schlapkohl, founder of Service Pro"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#050119] font-semibold text-sm">Brady Schlapkohl</p>
                    <p className="text-[#6b6b76] text-sm">Founder, Shine Squad and Service Pro</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-6 gap-4 md:gap-5">
              <Reveal className="col-span-6">
                <div className={`${FRAME} aspect-[4/3]`}>
                  <Image
                    src="/images/clients/shine-squad/shine-squad-technicians-detailing-cars-a-frame-sign.webp"
                    alt="Two Shine Squad technicians detailing a pair of vehicles beside their branded A-frame sign"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    style={{ objectPosition: '55% 42%' }}
                    priority
                  />
                </div>
              </Reveal>
              <Reveal className="col-span-3" delay={80}>
                <div className={`${FRAME} aspect-[3/4]`}>
                  <Image
                    src="/images/clients/shine-squad/shine-squad-shop-banner-behind-white-tesla-suv.webp"
                    alt="A white Tesla SUV parked in the Shine Squad shop in front of the Shine Squad car and boat detailing banner"
                    fill
                    sizes="(max-width: 1024px) 50vw, 28vw"
                    className="object-cover"
                    style={{ objectPosition: '50% 50%' }}
                  />
                </div>
              </Reveal>
              <Reveal className="col-span-3" delay={160}>
                <div className={`${FRAME} aspect-[3/4]`}>
                  <Image
                    src="/images/clients/shine-squad/shine-squad-technician-hand-polishing-black-sedan-in-shop.webp"
                    alt="A Shine Squad technician hand-polishing the rear fender of a black sedan with blue tape protecting the trim"
                    fill
                    sizes="(max-width: 1024px) 50vw, 28vw"
                    className="object-cover"
                    style={{ objectPosition: '55% 50%' }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── The loop ── */}
        <section className="px-6 py-20 md:py-24 bg-[#f7f6fb] border-y border-black/10">
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-2xl mb-14">
              <p className={`${KICKER} mb-4`}>The mechanism</p>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#050119] leading-[1.1] tracking-tight mb-5">
                The loop Service Pro installs.
              </h2>
              <p className="text-[#6b6b76] text-lg leading-relaxed">
                Not a website, ads, and a CRM. One connected system that runs on its own after launch, and we maintain it behind the scenes.
              </p>
            </Reveal>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {LOOP.map((step, i) => (
                <li key={step.n}>
                  <Reveal delay={i * 80} className="h-full">
                    <div className="h-full bg-white border border-black/10 rounded-3xl p-7 relative">
                      <span className="font-serif text-5xl text-transparent select-none" style={{ WebkitTextStroke: '1px rgba(94,37,250,0.55)' }} aria-hidden="true">
                        {step.n}
                      </span>
                      <h3 className="font-bold text-[#050119] text-lg mt-4 mb-2">{step.title}</h3>
                      <p className="text-[#6b6b76] text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-[#6b6b76] flex items-center gap-2">
              <svg className="w-4 h-4 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6M20 20v-6h-6M20 10a8 8 0 00-14.9-3M4 14a8 8 0 0014.9 3" />
              </svg>
              Then the loop starts again, with more jobs.
            </p>
          </div>
        </section>

        {/* ── Market shift ── */}
        <section className="px-6 py-24 md:py-32 bg-[#050119] relative overflow-hidden">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#5e25fa]/15 rounded-full blur-[160px] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto">
            <Reveal className="max-w-3xl mb-14">
              <p className="text-[#a78bfa] font-semibold uppercase tracking-widest text-xs mb-4">Case 02 · The market</p>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#e7e6ee] leading-[1.1] tracking-tight mb-5">
                Wall Street found local services.
              </h2>
              <p className="text-[#a3a3a3] text-lg leading-relaxed">
                Hundreds of billions of dollars are changing hands. The businesses built on systems will capture it. The ones built on the owner won&apos;t.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {DEALS.map((d, i) => (
                <Reveal key={d.title} delay={i * 80} className="h-full">
                  <div className="h-full bg-white/[0.04] border border-white/10 rounded-3xl p-7 flex flex-col">
                    <p className="font-serif text-6xl md:text-7xl text-[#e7e6ee] leading-none mb-5">{d.figure}</p>
                    <h3 className="text-[#e7e6ee] font-bold mb-2">{d.title}</h3>
                    <p className="text-[#a3a3a3] text-sm leading-relaxed mb-5">{d.body}</p>
                    <p className="mt-auto text-xs text-[#a78bfa]">
                      {d.source.href ? (
                        <a href={d.source.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#e7e6ee] transition-colors">
                          {d.source.label}
                        </a>
                      ) : (
                        <>Source: {d.source.label}</>
                      )}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mb-4">
              <div className="border border-white/10 rounded-3xl p-7 md:p-9 bg-white/[0.02]">
                <p className="text-[#a78bfa] font-semibold uppercase tracking-widest text-xs mb-6">
                  Three companies buying landscaping businesses
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {LANDSCAPING_BUYERS.map((b) => (
                    <li key={b.name} className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                      <p className="text-[#e7e6ee] font-bold text-lg mb-4">{b.name}</p>
                      <p className="font-serif text-5xl text-[#a78bfa] leading-none mb-2">{b.count}</p>
                      <p className="text-[#a3a3a3] text-sm">{b.line}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STATS.map((s, i) => (
                <Reveal key={s.figure} delay={i * 80} className="h-full">
                  <div className="h-full border border-white/10 rounded-3xl p-7">
                    <p className="font-serif text-4xl text-[#a78bfa] leading-none mb-3">{s.figure}</p>
                    <p className="text-[#e7e6ee]/85 text-sm leading-relaxed mb-3">{s.body}</p>
                    <p className="text-xs text-[#a3a3a3]">{s.source}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-10 text-xs text-[#a3a3a3] max-w-3xl leading-relaxed">
              These are examples of what is possible in the industry, not a promise or estimate of what any owner will earn.
            </p>
          </div>
        </section>

        {/* ── Portfolio ── */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <p className={`${KICKER} mb-4`}>The portfolio</p>
                <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#050119] leading-[1.1] tracking-tight">
                  Owner-operated. Built alongside.
                </h2>
              </div>
              <Link href="/companies" className="text-[#5e25fa] font-semibold hover:underline underline-offset-4 shrink-0">
                See all companies →
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PORTFOLIO.map((c, i) => (
                <Reveal key={c.name} delay={i * 80}>
                  <Link href="/companies" className="group block">
                    <div className={`${FRAME} aspect-[4/3] transition-transform duration-500 group-hover:-translate-y-1.5`}>
                      <Image
                        src={c.img}
                        alt={c.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{ objectPosition: c.pos }}
                      />
                    </div>
                    <p className="mt-4 font-bold text-[#050119]">{c.name}</p>
                    <p className="text-sm text-[#6b6b76]">{c.line}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 pb-24 md:pb-32">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center border border-black/10 rounded-[2rem] px-6 py-16 md:py-20 bg-[#f7f6fb] relative overflow-hidden">
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#5e25fa]/12 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative">
                <p className={`${KICKER} mb-4`}>Case 03 · You</p>
                <h2 className="font-serif text-4xl md:text-6xl font-medium text-[#050119] leading-[1.05] tracking-tight mb-5">
                  Your case study is next.
                </h2>
                <p className="text-[#6b6b76] text-lg max-w-xl mx-auto mb-9 leading-relaxed">
                  We only take owners we believe will succeed, and one partner per trade in each market. Partner case studies will be published here as they&apos;re completed.
                </p>
                <Link
                  href="/apply"
                  className="inline-block bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.45)] active:scale-95"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
