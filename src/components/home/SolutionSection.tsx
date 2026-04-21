import CalendlyButton from '@/components/ui/CalendlyButton';

export default function SolutionSection() {
  return (
    <section className="py-24 px-6 bg-[#050119]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">The Solution</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#e7e6ee] mb-4">
            The DetailPro System
          </h2>
          <p className="font-serif-italic text-2xl md:text-3xl text-[#a3a3a3]">
            Ads, automation, and systems — built around how detailing actually grows.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {/* Card 1: High-Intent Ads */}
          <div className="bg-gradient-to-br from-[#5e25fa]/20 to-[#280aa5]/10 border border-[#5e25fa]/30 rounded-3xl p-8 flex flex-col">
            <div className="w-12 h-12 bg-[#5e25fa]/20 rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e7e6ee] mb-3">High-Intent Ads</h3>
            <p className="text-[#a3a3a3] leading-relaxed flex-1">
              Meta and Google campaigns written for ceramic, PPF, and fleet buyers — not car wash price shoppers.
              We know which keywords convert and which ones burn your budget.
            </p>
            <div className="mt-6 flex items-center gap-2 text-[#5e25fa] text-sm font-semibold">
              <span>Facebook &amp; Instagram</span>
              <span className="text-white/20">·</span>
              <span>Google Search</span>
            </div>
          </div>

          {/* Card 2: Speed-to-Lead */}
          <div className="bg-gradient-to-br from-violet-600/15 to-indigo-900/10 border border-violet-500/25 rounded-3xl p-8 flex flex-col">
            <div className="w-12 h-12 bg-violet-600/20 rounded-2xl flex items-center justify-center mb-6 animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e7e6ee] mb-3">Speed-to-Lead Automation</h3>
            <p className="text-[#a3a3a3] leading-relaxed flex-1">
              Lead inquires at 2pm on a Tuesday while you&apos;re coated in clay bar. An SMS fires in seconds.
              The job is booked before they check the next shop&apos;s page.
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center gap-1.5 bg-violet-500/15 border border-violet-500/20 rounded-full px-3 py-1 text-violet-300 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                Responds in &lt; 5 minutes
              </span>
            </div>
          </div>

          {/* Card 3: Detailing CRM */}
          <div className="bg-gradient-to-br from-blue-600/15 to-blue-900/10 border border-blue-500/25 rounded-3xl p-8 flex flex-col">
            <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e7e6ee] mb-3">Detailing CRM</h3>
            <p className="text-[#a3a3a3] leading-relaxed flex-1">
              Pipelines built around how detailers actually close. Knows the difference between a
              $500 wash and a $35k ceramic job. Manages consumer, fleet, and maintenance in one place.
            </p>
            <div className="mt-6 flex items-center gap-2 text-blue-400 text-sm font-semibold">
              <span>You own the system</span>
              <span className="text-white/20">·</span>
              <span>Built for margins</span>
            </div>
          </div>
        </div>

        {/* Wide card: Fleet Pipeline */}
        <div className="bg-gradient-to-r from-[#5e25fa]/15 via-[#280aa5]/10 to-[#050119] border border-[#5e25fa]/25 rounded-3xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-14 h-14 bg-[#5e25fa]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-[#e7e6ee]">Fleet Lead Pipeline</h3>
                <span className="bg-[#5e25fa]/20 border border-[#5e25fa]/30 text-[#5e25fa] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
              </div>
              <p className="text-[#a3a3a3] leading-relaxed max-w-2xl">
                Fleet accounts are the most predictable revenue stream in detailing — and the hardest to source.
                We build and manage your commercial pipeline, connecting you with car dealerships, rental fleets,
                and corporate accounts that generate consistent baseline income. No more feast-or-famine weeks.
              </p>
            </div>
            <div className="flex-shrink-0">
              <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-bold px-6 py-3 rounded-full transition-all hover:shadow-[0_0_20px_rgba(94,37,250,0.4)] whitespace-nowrap">
                See It In Action
              </CalendlyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
