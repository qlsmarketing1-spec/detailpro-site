import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/repairman-tablet.jpg"
          alt="Local service business owner working"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-16">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm">Real Results</p>
        </div>

        {/* Stat callout */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-6 bg-[#5e25fa]/10 border border-[#5e25fa]/25 rounded-2xl px-8 py-5">
            <div className="text-center">
              <p className="text-4xl font-black text-[#050119]">$9k</p>
              <p className="text-[#6b6b76] text-sm">starting monthly revenue</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#5e25fa]/50" />
              <svg className="w-6 h-6 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="h-px w-8 bg-[#5e25fa]/50" />
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[#5e25fa]">$34k</p>
              <p className="text-[#6b6b76] text-sm">monthly revenue at 90 days</p>
            </div>
          </div>
        </div>

        {/* Main quote */}
        <div className="border-l-4 border-[#5e25fa] pl-8 md:pl-12 mb-12">
          <p className="font-serif-italic text-3xl md:text-4xl lg:text-5xl text-[#050119] leading-tight mb-8">
            &ldquo;For twenty years I was the business. Leads used to just pile up in my texts —
            now they get booked before I even see the notification.&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5e25fa] to-[#280aa5] flex items-center justify-center text-white font-black text-lg">
              MT
            </div>
            <div>
              <p className="text-[#050119] font-semibold">Marcus T.</p>
              <p className="text-[#6b6b76] text-sm">Owner, residential landscaping company — scaled $9k → $34k in 90 days</p>
            </div>
          </div>
        </div>

        {/* Supporting context */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: 'Before Service Pro',
              text: "Running the business on paper and a half-used CRM. Leads followed up whenever he found time. Revenue inconsistent week to week.",
              accent: 'border-red-500/30 bg-red-500/5',
            },
            {
              label: 'What Changed',
              text: "Website, local search visibility, and follow-up automation installed in the first 4 weeks. Ads targeting the jobs worth taking — not just filling the calendar.",
              accent: 'border-[#5e25fa]/30 bg-[#5e25fa]/5',
            },
            {
              label: 'After 90 Days',
              text: "Consistent $34k months. Calendar booked weeks out. Leads captured, booked, and rebooked automatically. Owner not glued to his phone every night.",
              accent: 'border-green-500/30 bg-green-500/5',
            },
          ].map((card) => (
            <div key={card.label} className={`border rounded-2xl p-6 ${card.accent}`}>
              <p className="text-[#050119] font-bold text-sm uppercase tracking-wider mb-3">{card.label}</p>
              <p className="text-[#6b6b76] leading-relaxed text-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
