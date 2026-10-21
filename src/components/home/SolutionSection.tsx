import Reveal from '@/components/ui/Reveal';

const ITEMS = [
  {
    title: 'Website',
    desc: 'A site built to rank and convert, connected to everything else so every lead lands in one place.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 12a9 9 0 019-9m-9 9a9 9 0 009 9m0-18a9 9 0 019 9m-9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m9-9a9 9 0 01-9 9" />
    ),
  },
  {
    title: 'Ads',
    desc: 'Campaigns that put you in front of people already searching for the work you do.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    ),
  },
  {
    title: 'Automated SMS & Missed-Call Text-Back',
    desc: 'Every new lead and missed call gets a text back right away, even after hours.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    ),
  },
  {
    title: 'Review Generation',
    desc: 'Happy customers are asked for a review automatically after the job, with no manual follow-up.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    ),
  },
  {
    title: 'Follow-Up & Rebooking',
    desc: 'Leads are followed up and past customers are reminded to book again, on their own.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    ),
  },
  {
    title: 'Maintenance & Mentorship',
    desc: 'We keep the systems running behind the scenes and stay in your corner as the company grows.',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">What You Get</p>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-[44px] font-medium text-[#050119] leading-[1.15] tracking-tight mb-5">
            Everything a modern local service business runs on.
          </h2>
          <p className="text-[#6b6b76] text-lg leading-relaxed max-w-2xl mx-auto">
            We bring the technology, systems, and mentorship. You build the company.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90} className="h-full">
              <div className="h-full bg-white border border-black/10 rounded-3xl p-7 transition-all duration-300 hover:border-[#5e25fa]/30 hover:shadow-lg hover:shadow-[#5e25fa]/5 motion-safe:hover:-translate-y-1">
                <div className="w-11 h-11 bg-[#5e25fa]/10 rounded-2xl flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#050119] mb-2">{item.title}</h3>
                <p className="text-[#6b6b76] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
