import CalendlyButton from '@/components/ui/CalendlyButton';

const pains = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    text: 'Missing calls because you\'re busy ceramic coating a truck.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    text: 'Leads inquire on Facebook, but ghost you when you reply 2 hours later.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    text: 'Empty winter schedule because you rely on word-of-mouth.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
      </svg>
    ),
    text: "Spending money on generic ads that just get 'How much?' comments.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Spending 4 hours a night texting leads back from your personal phone.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    text: 'Struggling to source fleet leads to give your team consistent work?',
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Pattern background */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-screen"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/detail_pro_main/Logos/DetailPro_Patterns-06.png')`,
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#e7e6ee]">
            Tired of the<br />
            <span className="font-serif-italic text-[#5e25fa]">detailing grind?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pains.map((pain, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start hover:bg-white/8 transition-colors">
              <div className="text-[#5e25fa] flex-shrink-0 mt-0.5">{pain.icon}</div>
              <p className="text-[#e7e6ee] leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">
            Fix My Shop Today
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
}
