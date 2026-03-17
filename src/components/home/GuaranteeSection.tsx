import CalendlyButton from '@/components/ui/CalendlyButton';

export default function GuaranteeSection() {
  return (
    <section className="py-24 px-6 bg-[#050119]">
      <div className="max-w-4xl mx-auto">
        <div className="relative border border-[#5e25fa]/30 rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5e25fa]/10 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#5e25fa]/20 blur-[80px] pointer-events-none" />

          <div className="relative">
            {/* Shield icon */}
            <div className="w-20 h-20 bg-[#5e25fa]/20 border border-[#5e25fa]/30 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(94,37,250,0.3)]">
              <svg className="w-10 h-10 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            {/* Label */}
            <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Our Promise</p>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-black text-[#e7e6ee] mb-4">
              The 90-Day Guarantee.
            </h2>
            <p className="font-serif-italic text-2xl md:text-3xl text-[#a3a3a3] mb-8">
              Results or we go hands-on. No excuses.
            </p>

            {/* Body */}
            <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              If you don&apos;t see clear momentum in 90 days, we don&apos;t point fingers or hide behind email.
              We get on a call, find the root cause — whether it&apos;s lead follow-up, ad targeting, or
              pipeline setup — and fix it personally.
              <span className="block mt-4 text-[#e7e6ee] font-semibold">
                This isn&apos;t marketing language. It&apos;s how we operate.
              </span>
            </p>

            {/* Trust points */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              {[
                'No long-term contracts',
                '10% rev-share — aligned incentives',
                'Hands-on if results stall',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-[#e7e6ee]/70 text-sm">
                  <svg className="w-4 h-4 text-[#5e25fa] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>

            <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-bold px-10 py-5 rounded-full text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.5)]">
              Book My Free Demo
            </CalendlyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
