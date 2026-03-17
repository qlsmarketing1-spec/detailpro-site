export default function AutomationVisual() {
  return (
    <section className="py-24 px-4 bg-[#030011]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e7e6ee] mb-4">Your Speed-To-Lead Engine</h2>
          <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
            When a lead hits your site, we book them before they can call your competitor. 24/7 coverage for your shop.
          </p>
        </div>

        {/* Orbital visual */}
        <div className="flex justify-center mb-16">
          <div className="relative w-72 h-72">
            {/* Outer ring SVG */}
            <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 288 288">
              <circle cx="144" cy="144" r="130" fill="none" stroke="#5e25fa20" strokeWidth="1" strokeDasharray="8 8" />
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const x1 = 144 + 80 * Math.cos(angle);
                const y1 = 144 + 80 * Math.sin(angle);
                const x2 = 144 + 130 * Math.cos(angle);
                const y2 = 144 + 130 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5e25fa40" strokeWidth="1" />;
              })}
            </svg>

            {/* Inner orbiting element 1 — message icon */}
            <div className="absolute animate-spin-slow-reverse" style={{ inset: '20px' }}>
              <div className="relative w-full h-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#5e25fa] rounded-xl p-2 shadow-lg shadow-[#5e25fa]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Inner orbiting element 2 — calendar icon */}
            <div className="absolute animate-spin-slow" style={{ inset: '40px' }}>
              <div className="relative w-full h-full">
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#280aa5] rounded-xl p-2 shadow-lg shadow-[#280aa5]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Center pulsing box */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#5e25fa] w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl shadow-[#5e25fa]/40 animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { tag: 'BOT', title: 'Instant SMS', desc: 'Auto-reply to leads within 30 seconds of their inquiry.' },
            { tag: 'SYS', title: 'Fleet Pipeline', desc: 'Nurture commercial accounts for monthly predictable income.' },
            { tag: 'G2', title: 'Review Engine', desc: 'Automated review requests after every completed job.' },
            { tag: 'AI', title: 'Review System', desc: 'Reach out to past customers for ceramic maintenance or seasonal details.' },
          ].map((item) => (
            <div key={item.tag} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
              <div className="bg-[#5e25fa]/20 text-[#5e25fa] font-bold text-xs px-2 py-1 rounded-lg h-fit flex-shrink-0">
                {item.tag}
              </div>
              <div>
                <h4 className="font-bold text-[#e7e6ee] mb-1">{item.title}</h4>
                <p className="text-[#a3a3a3] text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
