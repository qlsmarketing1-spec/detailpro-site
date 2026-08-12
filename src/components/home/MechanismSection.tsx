const FEED = [
  {
    time: '0:00',
    label: 'New Lead',
    detail: 'Google search — captured instantly',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    time: '0:12',
    label: 'SMS Sent',
    detail: 'Automated response goes out',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    time: '0:47',
    label: 'Booked',
    detail: 'Tuesday, 2:00 PM — on the calendar',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    time: 'Day 2',
    label: 'Job Completed',
    detail: 'Marked done, invoice sent',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    time: 'Day 3',
    label: 'Review Requested',
    detail: 'Automated ask — no manual follow-up',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    time: 'Day 90',
    label: 'Rebooked',
    detail: 'Automatic maintenance reminder',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function MechanismSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        {/* Text */}
        <div>
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">How It Works</p>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-[44px] font-medium text-[#050119] leading-[1.15] tracking-tight mb-6">
            This isn&apos;t a diagram. It&apos;s what happens automatically.
          </h2>
          <p className="text-[#6b6b76] text-lg leading-relaxed max-w-lg">
            No one on your team touches any of this. A lead comes in, the system responds,
            books the job, and follows up months later — every time, whether you&apos;re on
            the tools or on a beach.
          </p>
        </div>

        {/* Live feed card */}
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-[#5e25fa]/15 via-[#280aa5]/5 to-transparent rounded-[2rem] blur-xl" />
          <div className="relative bg-white border border-black/10 rounded-[2rem] shadow-xl shadow-black/5 p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
              <span className="text-[#050119] text-xs font-semibold uppercase tracking-widest">Live Activity</span>
            </div>

            {/* Feed */}
            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-black/10" />
              <div className="flex flex-col gap-6">
                {FEED.map((item, i) => (
                  <div
                    key={item.label}
                    className="relative flex items-start gap-4 animate-feed-in"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  >
                    <div className="relative z-10 w-10 h-10 flex-shrink-0 rounded-full bg-[#5e25fa] text-white flex items-center justify-center shadow-[0_0_0_4px_white]">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0 flex items-start justify-between gap-3 pt-1.5">
                      <div>
                        <p className="text-[#050119] font-semibold text-sm">{item.label}</p>
                        <p className="text-[#6b6b76] text-xs mt-0.5">{item.detail}</p>
                      </div>
                      <span className="flex-shrink-0 text-[#5e25fa] text-xs font-semibold bg-[#5e25fa]/8 rounded-full px-2.5 py-1">
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Capacity strip */}
            <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-black/10">
              {[
                { value: '<60 sec', label: 'Average response time' },
                { value: '100%', label: 'Leads followed up' },
                { value: '100%', label: 'Missed calls recovered' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-[#050119] font-bold text-lg md:text-xl">{stat.value}</p>
                  <p className="text-[#6b6b76] text-[11px] md:text-xs leading-snug mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
