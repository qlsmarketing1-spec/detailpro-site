import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

      <div className="relative max-w-3xl mx-auto px-6 py-20 w-full flex flex-col items-center text-center">

        {/* H1 */}
        <h1 className="font-serif text-4xl md:text-5xl xl:text-[60px] font-medium text-[#050119] leading-[1.15] tracking-tight mb-6">
          Building the next generation
          <br />
          of local service businesses.
        </h1>

        {/* Subheading */}
        <p className="font-serif-italic text-xl md:text-2xl text-[#6b6b76] max-w-2xl mb-10 leading-relaxed">
          &ldquo;It is not the strongest of the species that survives, nor the most intelligent,
          but the one most adaptable to change.&rdquo;
          <span className="block mt-3 text-sm not-italic font-sans font-medium tracking-wide text-[#6b6b76]/70">
            — Charles Darwin
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/apply"
            className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-bold px-9 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.45)] active:scale-95 text-center"
          >
            Apply Now
          </Link>
          <a
            href="#how-it-works"
            className="flex items-center justify-center gap-2 border border-black/15 hover:border-[#5e25fa]/40 text-[#050119] font-semibold px-9 py-4 rounded-full text-lg transition-all hover:bg-black/5"
          >
            See How It Works
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-black/20">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
