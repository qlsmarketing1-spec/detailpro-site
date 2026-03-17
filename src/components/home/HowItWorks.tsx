const steps = [
  {
    number: '01',
    day: 'Day 1',
    title: 'System Install',
    description:
      'Ads connected, CRM live, automations firing. We handle the full setup — no homework for you. By the end of Day 1, your pipeline is running.',
    detail: 'Ads + CRM + automations — live on day one',
  },
  {
    number: '02',
    day: 'Days 1–7',
    title: 'Leads Start Moving',
    description:
      'Your first campaigns go live. Every inquiry gets an instant SMS response. Qualified leads get booked automatically. You just show up and do the work.',
    detail: 'Speed-to-lead: under 5 minutes, automatically',
  },
  {
    number: '03',
    day: 'Day 30+',
    title: 'Predictable Revenue',
    description:
      'Fleet pipeline brings in baseline commercial work. Consumer bookings compound. You stop trading hours for dollars and start building something that runs without you.',
    detail: 'Fleet + consumer + ceramic — all in one dashboard',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#050119]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">The Process</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#e7e6ee] mb-4">
            From sign-up to booked jobs
          </h2>
          <p className="font-serif-italic text-2xl md:text-3xl text-[#a3a3a3]">
            in days, not months.
          </p>
        </div>

        {/* Steps — desktop: horizontal timeline, mobile: stacked */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px">
            <div className="max-w-4xl mx-auto">
              <div
                className="h-px w-full"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, #5e25fa 0, #5e25fa 8px, transparent 8px, transparent 20px)',
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col">
                {/* Number circle */}
                <div className="flex md:justify-center mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[#5e25fa] flex items-center justify-center font-black text-white text-lg z-10 relative shadow-[0_0_30px_rgba(94,37,250,0.5)]">
                      {step.number}
                    </div>
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-[#5e25fa]/40 blur-lg scale-150" />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white/4 border border-white/10 rounded-3xl p-7 flex-1 hover:bg-white/[0.06] hover:border-[#5e25fa]/30 transition-all">
                  <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-2">{step.day}</p>
                  <h3 className="text-xl font-bold text-[#e7e6ee] mb-4">{step.title}</h3>
                  <p className="text-[#a3a3a3] leading-relaxed mb-6">{step.description}</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-[#e7e6ee]/60 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#5e25fa] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
