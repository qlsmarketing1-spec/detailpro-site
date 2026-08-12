import Image from 'next/image';
import CalendlyButton from '@/components/ui/CalendlyButton';

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/foam-wash.jpg"
          alt="Local service business at work"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white" />
      </div>

      {/* Violet glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#5e25fa]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Label */}
        <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-6">Ready to grow?</p>

        {/* Headline */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#050119] leading-[1.0] mb-6 tracking-tight">
          Fill your calendar.
          <br />
          <span className="font-serif-italic text-[#5e25fa]">Stop chasing leads.</span>
        </h2>

        {/* Sub */}
        <p className="text-[#6b6b76] text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Service Pro isn&apos;t an agency you hire and forget. It&apos;s a partnership — we build the infrastructure, run the systems, and stay invested in your growth because our revenue scales with yours.
        </p>

        {/* CTA */}
        <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-black px-12 py-6 rounded-full text-xl transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(94,37,250,0.5)] mb-4">
          Book a Free Strategy Call
        </CalendlyButton>

        {/* Reassurance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#6b6b76] text-sm">
          {[
            'No flat monthly fees',
            'You own the system',
            'Spots are limited',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
