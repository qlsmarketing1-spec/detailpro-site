export default function OpportunityCostSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">The Math Nobody Runs</p>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-[44px] font-medium text-[#050119] leading-[1.15] tracking-tight mb-4">
            Same lead. Two outcomes.
          </h2>
          <p className="text-[#6b6b76] text-lg max-w-lg mx-auto">
            Whoever responds first usually gets the job. This is the only variable that changes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Losing path */}
          <div className="border border-black/10 rounded-3xl p-8 flex flex-col items-center text-center bg-black/[0.02]">
            <p className="text-[#6b6b76] text-3xl font-black mb-2">3 hrs later</p>
            <p className="text-[#050119] font-semibold mb-6">You respond when you get a chance</p>
            <svg className="w-5 h-5 text-black/25 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <div className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-[#6b6b76] font-semibold text-sm">Already booked with someone else</span>
            </div>
          </div>

          {/* Winning path */}
          <div className="border border-[#5e25fa]/30 rounded-3xl p-8 flex flex-col items-center text-center bg-[#5e25fa]/[0.04]">
            <p className="text-[#5e25fa] text-3xl font-black mb-2">0:47</p>
            <p className="text-[#050119] font-semibold mb-6">You respond immediately</p>
            <svg className="w-5 h-5 text-[#5e25fa]/50 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <div className="inline-flex items-center gap-2 bg-[#5e25fa] rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white font-semibold text-sm">Job booked</span>
            </div>
          </div>
        </div>

        <p className="text-[#050119] text-lg font-medium text-center max-w-2xl mx-auto mt-10 leading-relaxed">
          Service Pro responds in under a minute, every time — so every lead gets the outcome
          on the right, not the one on the left.
        </p>
      </div>
    </section>
  );
}
