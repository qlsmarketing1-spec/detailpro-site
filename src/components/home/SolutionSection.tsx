const pillars = [
  {
    title: 'Website',
    desc: 'A site built to rank and convert — not a template that just exists.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 12a9 9 0 019-9m-9 9a9 9 0 009 9m0-18a9 9 0 019 9m-9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m9-9a9 9 0 01-9 9" />
      </svg>
    ),
  },
  {
    title: 'Local Search Visibility',
    desc: 'Showing up where the job actually gets found — Google, Maps, and search.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Advertising',
    desc: 'Campaigns built for the caliber of infrastructure bigger competitors already have.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: 'Follow-Up Automation',
    desc: 'A system that captures, books, and rebooks customers on its own.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">What We Build</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#050119] mb-4">
            The digital backbone of the business
          </h2>
          <p className="font-serif-italic text-2xl md:text-3xl text-[#6b6b76] max-w-3xl mx-auto">
            Website, local search visibility, advertising, and follow-up automation — built and run for you.
          </p>
        </div>

        {/* 4-pillar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-gradient-to-br from-[#5e25fa]/10 to-[#280aa5]/5 border border-[#5e25fa]/20 rounded-3xl p-7 hover:border-[#5e25fa]/40 transition-all"
            >
              <div className="w-12 h-12 bg-[#5e25fa]/20 rounded-2xl flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-[#050119] mb-2">{pillar.title}</h3>
              <p className="text-[#6b6b76] text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Two supporting cards: new owners / established owners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/[0.03] border border-black/10 rounded-3xl p-8">
            <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-3">For New Owners</p>
            <p className="text-[#6b6b76] leading-relaxed">
              Start with the same caliber of infrastructure your bigger competitors already have —
              instead of spending years and thousands of dollars figuring it out yourself.
            </p>
          </div>
          <div className="bg-black/[0.03] border border-black/10 rounded-3xl p-8">
            <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-3">For Established Owners</p>
            <p className="text-[#6b6b76] leading-relaxed">
              Finally replace pencil-and-paper and half-used tools with a system that captures,
              books, and rebooks customers on its own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
