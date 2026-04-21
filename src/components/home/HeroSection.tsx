import Image from 'next/image';
import CalendlyButton from '@/components/ui/CalendlyButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">

        {/* ── LEFT: Z-pattern text column ── */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 border border-[#5e25fa]/40 bg-[#5e25fa]/10 rounded-full px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5e25fa] animate-pulse" />
            <span className="text-[#e7e6ee]/90 text-sm font-medium tracking-wide">Marketing & systems partner for auto detailers</span>
          </div>

          {/* H1 — pattern interrupt, outcome-focused, under 10 words */}
          <h1 className="text-5xl md:text-6xl xl:text-[72px] font-black text-[#e7e6ee] leading-[1.05] tracking-tight mb-6">
            Most detailers
            <br />
            won't scale.
            <br />
            <span className="font-serif-italic text-[#5e25fa]">You will.</span>
          </h1>

          {/* Subheadline — under 25 words, addresses core pain */}
          <p className="text-[#a3a3a3] text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            DetailPro is a growth partnership — not an agency, not a software subscription. We run your ads, build your systems, and stay in it with you until the revenue is real and repeatable.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-bold px-9 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.45)] active:scale-95">
              Book a Free Strategy Call
            </CalendlyButton>
            <a
              href="#how-it-works"
              className="flex items-center justify-center gap-2 border border-white/15 hover:border-[#5e25fa]/40 text-[#e7e6ee] font-semibold px-9 py-4 rounded-full text-lg transition-all hover:bg-white/5"
            >
              See How It Works
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Social proof — trust paradox: 4.9 not 5.0 */}
          <div className="flex items-center gap-5">
            {/* Avatar stack */}
            <div className="flex -space-x-2.5">
              {['JM', 'TR', 'AK', 'DS', 'RV'].map((initials) => (
                <div
                  key={initials}
                  className="w-9 h-9 rounded-full border-2 border-[#050119] bg-gradient-to-br from-[#5e25fa] to-[#280aa5] flex items-center justify-center text-white text-[11px] font-bold"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              {/* Stars — 4.9 intentionally, not 5.0 */}
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                {/* Half star for 4.9 */}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="half">
                      <stop offset="90%" stopColor="#facc15" />
                      <stop offset="90%" stopColor="#374151" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="text-[#a3a3a3] text-sm">Trusted by top-performing detailers</p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Visual panel ── */}
        <div className="relative hidden lg:block">
          {/* Glow border effect */}
          <div className="absolute -inset-3 bg-gradient-to-br from-[#5e25fa]/30 via-[#280aa5]/20 to-transparent rounded-3xl blur-xl" />

          <div className="relative rounded-3xl overflow-hidden border border-[#5e25fa]/20">
            <Image
              src="/images/2-cars-sign.jpeg"
              alt="Professional detailer at work — DetailPro client"
              width={480}
              height={580}
              className="object-cover w-full h-[560px]"
              priority
            />
            {/* Dark fade at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050119]/75 via-[#050119]/10 to-transparent" />

            {/* Top-right activity badge */}
            <div className="absolute top-5 right-5 bg-[#050119]/80 backdrop-blur-sm border border-[#5e25fa]/30 rounded-full px-3 py-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[#e7e6ee] text-xs font-medium">System active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
