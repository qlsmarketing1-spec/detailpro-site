import Image from 'next/image';
import CalendlyButton from '@/components/ui/CalendlyButton';

const pains = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    text: "You're deep in a ceramic job and a $3,000 lead calls — goes to voicemail, never calls back.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    text: 'Leads DM you on Facebook, you reply 2 hours later — they already booked your competitor.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    text: 'Revenue swings wildly week to week. Some months are great. Others are terrifying.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "You're running ads. The comments say 'How much?' but nobody books. The agency shrugs.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'You spend your evenings manually texting leads back from your personal phone. Every night.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    text: 'No fleet accounts. No predictable baseline income. Just hustle, every single week.',
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#050119]">
      {/* Subtle pattern background */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-screen"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/detail_pro_main/Logos/DetailPro_Patterns-06.png')`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">The Real Problem</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#e7e6ee] mb-6">
            Sound familiar?
          </h2>
          <p className="font-serif-italic text-2xl md:text-3xl text-[#a3a3a3] max-w-2xl mx-auto">
            You didn&apos;t start a detailing business to spend your evenings texting dead leads.
          </p>
        </div>

        {/* 2-col layout: cards + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Pain cards */}
          <div className="space-y-4">
            {pains.map((pain, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-white/4 border-l-2 border-[#5e25fa]/50 rounded-r-xl pl-5 pr-6 py-5 hover:bg-white/[0.06] hover:border-[#5e25fa] transition-all"
              >
                <div className="text-[#5e25fa] flex-shrink-0 mt-0.5">{pain.icon}</div>
                <p className="text-[#e7e6ee]/90 leading-relaxed">{pain.text}</p>
              </div>
            ))}

            <div className="pt-4">
              <a
                href="https://www.detailprocrm.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-[0_0_30px_rgba(94,37,250,0.4)]"
              >
                Fix My Shop Today
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative hidden lg:block sticky top-24">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5e25fa]/20 to-transparent rounded-3xl blur-xl scale-105" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/jeep-foam.jpeg"
                alt="Auto detailing station — professional shop setup"
                width={600}
                height={700}
                className="object-cover w-full h-[580px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050119]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#050119]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <p className="text-[#e7e6ee] font-semibold text-sm mb-1">
                    &ldquo;Over 60% of my estimates weren&apos;t even being viewed by clients.&rdquo;
                  </p>
                  <p className="text-[#a3a3a3] text-xs">— Real detailer, before DetailPro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
