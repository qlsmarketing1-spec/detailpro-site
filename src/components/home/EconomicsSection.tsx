const cases = [
  {
    label: 'For New Owners',
    risk: "The scariest part of starting a business isn't the idea — it's not knowing whether the foundation under it will hold.",
    expensiveWay: "Most people find that out the expensive way: years of guessing, courses, and agencies that dump a ton of leads but leave the owner with no system to actually turn those leads into a business.",
    withUs: "Service Pro exists so that risk gets taken off the table on day one. The owner isn't betting on their instincts about marketing and systems they've never built before — they're starting with infrastructure that's already proven.",
  },
  {
    label: 'For Established Owners',
    risk: "The risk is different but just as real: the business is valuable, but only as long as they're working in it.",
    expensiveWay: "It can't be sold for what it's worth, and the owner's son or daughter don't want to take it over in this state.",
    withUs: "Service Pro turns the operation into something that runs on systems instead of memory and hustle — which is what actually makes it worth passing on, or selling.",
  },
];

export default function EconomicsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Why It Works</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#050119] mb-4">
            Risk shouldn&apos;t be the cost{' '}
            <span className="font-serif-italic text-[#5e25fa]">of doing this right.</span>
          </h2>
          <p className="text-[#6b6b76] text-lg md:text-xl max-w-2xl mx-auto">
            Two different risks, depending on where you&apos;re starting from. Both get solved the same way —
            infrastructure that&apos;s already proven, instead of guesswork.
          </p>
        </div>

        {/* Risk cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.label} className="bg-black/[0.03] border border-black/10 rounded-3xl p-8 md:p-10">
              <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-4">{c.label}</p>
              <p className="text-[#050119] font-semibold text-lg leading-relaxed mb-6">{c.risk}</p>

              <div className="border-l-2 border-red-500/50 pl-5 mb-6">
                <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">The Expensive Way</p>
                <p className="text-[#6b6b76] text-sm leading-relaxed">{c.expensiveWay}</p>
              </div>

              <div className="border-l-2 border-[#5e25fa]/60 pl-5">
                <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-2">With Service Pro</p>
                <p className="text-[#6b6b76] text-sm leading-relaxed">{c.withUs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
