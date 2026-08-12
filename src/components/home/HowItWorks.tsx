const steps = [
  {
    number: '01',
    day: 'Weeks 1–4',
    title: 'We Build & Train',
    description:
      "The first four weeks are hands-on. We build the systems, plug them into how the business actually runs, and train the owner on what they need to know. No homework, no guesswork — we do the setup.",
    detail: 'Website, local search, ads, and automation — all installed',
  },
  {
    number: '02',
    day: 'Month 2+',
    title: 'The Business Runs the Loop',
    description:
      'Ads bring in leads. Automations handle booking and rebooking. Service Pro maintains the infrastructure behind the scenes so the owner isn’t the one holding it together.',
    detail: 'Captures, books, and rebooks customers on its own',
  },
  {
    number: '03',
    day: '6 Months',
    title: 'Software-Driven, Not Headcount-Driven',
    description:
      "Delivery scales through software, not through adding people — which is what keeps it consistent client to client as we move toward largely agentic fulfillment.",
    detail: 'Built to scale without scaling headcount',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">The Process</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#050119] mb-4">
            Hands-on to start,
          </h2>
          <p className="font-serif-italic text-2xl md:text-3xl text-[#6b6b76]">
            self-running by design.
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
                <div className="bg-black/[0.03] border border-black/10 rounded-3xl p-7 flex-1 hover:bg-black/[0.05] hover:border-[#5e25fa]/30 transition-all">
                  <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-2">{step.day}</p>
                  <h3 className="text-xl font-bold text-[#050119] mb-4">{step.title}</h3>
                  <p className="text-[#6b6b76] leading-relaxed mb-6">{step.description}</p>
                  <div className="border-t border-black/10 pt-4">
                    <p className="text-[#050119]/60 text-sm flex items-center gap-2">
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
