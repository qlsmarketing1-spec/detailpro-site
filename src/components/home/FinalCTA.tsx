import Image from 'next/image';
import CalendlyButton from '@/components/ui/CalendlyButton';

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#050119]">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/foam-wash.jpg"
          alt="Professional car detailing"
          fill
          className="object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050119] via-[#050119]/80 to-[#050119]" />
      </div>

      {/* Violet glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#5e25fa]/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Label */}
        <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-6">Ready to Fix the Leak?</p>

        {/* Headline */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#e7e6ee] leading-[1.0] mb-6 tracking-tight">
          Fill your calendar.
          <br />
          <span className="font-serif-italic text-[#5e25fa]">Stop chasing leads.</span>
        </h2>

        {/* Sub */}
        <p className="text-[#a3a3a3] text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
          DetailPro is not for everyone. It&apos;s for serious operators who are ready to stop trading time
          for dollars and start building a system that works without them.
        </p>
        <p className="text-[#e7e6ee] font-bold text-lg mb-12">Only pay for results.</p>

        {/* CTA */}
        <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-black px-12 py-6 rounded-full text-xl transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(94,37,250,0.5)] mb-4">
          Book A Demo Now
        </CalendlyButton>

        {/* Self-serve escape valve */}
        <p className="text-[#a3a3a3] text-sm mb-10">
          Prefer to skip the call?{' '}
          <a
            href="https://www.detailprocrm.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e7e6ee]/70 underline underline-offset-2 hover:text-[#e7e6ee] transition-colors"
          >
            Buy now →
          </a>
        </p>

        {/* Reassurance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#a3a3a3] text-sm">
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
