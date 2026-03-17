const tiers = [
  {
    label: 'The Bait',
    service: 'Exterior wash & wax',
    role: 'Lead generation',
    margin: 'Thin',
    color: 'text-[#a3a3a3]',
    barWidth: 'w-1/4',
    barColor: 'bg-[#a3a3a3]/40',
    description: 'Gets cars in the door. Thin margins. Not where you build wealth.',
  },
  {
    label: 'The Upsell',
    service: 'Interior detail & paint correction',
    role: 'Revenue booster',
    margin: 'Moderate',
    color: 'text-blue-400',
    barWidth: 'w-2/4',
    barColor: 'bg-blue-400/60',
    description: 'Converts wash customers. Good margin. Builds the relationship.',
  },
  {
    label: 'The Cash Cow',
    service: 'Ceramic coating & graphene',
    role: 'Wealth builder',
    margin: 'High',
    color: 'text-[#5e25fa]',
    barWidth: 'w-3/4',
    barColor: 'bg-[#5e25fa]',
    description: 'One job generates what most volume-based operations see in weeks.',
  },
  {
    label: 'The Rent Coverer',
    service: 'PPF full vehicle',
    role: 'Top tier',
    margin: 'Very High',
    color: 'text-violet-300',
    barWidth: 'w-full',
    barColor: 'bg-gradient-to-r from-[#5e25fa] to-violet-400',
    description: 'The job that pays rent for the month. The one most detailers rarely close.',
  },
];

export default function EconomicsSection() {
  return (
    <section className="py-24 px-6 bg-[#050119]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Why It Works</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#e7e6ee] mb-4">
            We know your{' '}
            <span className="font-serif-italic text-[#5e25fa]">service mix.</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg md:text-xl max-w-2xl mx-auto">
            Generic ad agencies treat every service the same. DetailPro is built around the actual
            margin structure of your business — targeting the jobs that move the needle, not just fill your calendar.
          </p>
        </div>

        {/* Tier breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: tier cards */}
          <div className="space-y-4">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:bg-white/[0.06] hover:border-white/15 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${tier.color} block mb-1`}>
                      {tier.label}
                    </span>
                    <p className="text-[#e7e6ee] font-semibold">{tier.service}</p>
                  </div>
                  <span className="text-[#a3a3a3] text-xs bg-white/8 rounded-full px-3 py-1 whitespace-nowrap">
                    {tier.role}
                  </span>
                </div>
                {/* Margin bar */}
                <div className="h-1.5 bg-white/8 rounded-full mb-3 overflow-hidden">
                  <div className={`h-full rounded-full ${tier.barWidth} ${tier.barColor}`} />
                </div>
                <p className="text-[#a3a3a3] text-sm leading-relaxed">{tier.description}</p>
              </div>
            ))}
          </div>

          {/* Right: insight card */}
          <div className="space-y-5">
            <div className="bg-gradient-to-br from-[#5e25fa]/15 to-[#280aa5]/10 border border-[#5e25fa]/25 rounded-3xl p-8">
              <div className="w-12 h-12 bg-[#5e25fa]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#e7e6ee] mb-3">
                We build your campaigns around the jobs you actually want.
              </h3>
              <p className="text-[#a3a3a3] leading-relaxed mb-6">
                Your ad strategy should look completely different depending on whether you&apos;re targeting
                ceramic buyers vs. interior customers. We set them up accordingly — and optimize for the
                jobs that build your business, not just fill your schedule.
              </p>
              <div className="space-y-3">
                {[
                  'Ceramic & PPF-specific ad creatives',
                  'Fleet acquisition campaigns',
                  'Retargeting for high-ticket buyers',
                  'Qualification flow to filter price shoppers',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[#e7e6ee]/80">
                    <svg className="w-4 h-4 text-[#5e25fa] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
