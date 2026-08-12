const owners = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    label: 'New Owners',
    text: "Walked away from a steady paycheck to get here. Maybe skipped or paused college. Maybe have a family counting on this working. They're not looking for another course or agency pitch promising leads — they want to know the money going into this business is building something that actually holds up, because they don't get a do-over.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M9 17V9m4 8V5m4 12v-6" />
      </svg>
    ),
    label: 'Established Owners',
    text: "Often 15–30+ years in, still running things on paper, spreadsheets, or a CRM they never fully set up. They've already proven the business works. What they don't have is a business that works without them in it every hour — one they could hand to their kids, sell for real value and retire, or step away from long enough to take an actual vacation.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Who This Is For</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#050119] mb-6">
            Two different owners.
            <br />
            Same underlying fear.
          </h2>
          <p className="font-serif-italic text-2xl md:text-3xl text-[#6b6b76] max-w-2xl mx-auto">
            That the business depends entirely on them — and if something goes wrong, there&apos;s no safety net.
          </p>
        </div>

        {/* 2-col owner cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {owners.map((owner) => (
            <div
              key={owner.label}
              className="bg-black/[0.03] border border-black/10 rounded-3xl p-8 md:p-10 hover:bg-black/[0.05] hover:border-[#5e25fa]/30 transition-all"
            >
              <div className="w-12 h-12 bg-[#5e25fa]/20 rounded-2xl flex items-center justify-center text-[#5e25fa] mb-6">
                {owner.icon}
              </div>
              <h3 className="text-xl font-bold text-[#050119] mb-4">{owner.label}</h3>
              <p className="text-[#6b6b76] leading-relaxed">{owner.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/ads"
            className="inline-block bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-[0_0_30px_rgba(94,37,250,0.4)]"
          >
            See How the Partnership Works
          </a>
        </div>
      </div>
    </section>
  );
}
