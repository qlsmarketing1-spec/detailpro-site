export default function CompaniesHero({ count }: { count: number }) {
  return (
    <section className="relative bg-white overflow-hidden border-b border-black/10">
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-32 w-[700px] h-[700px] bg-[#5e25fa]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#280aa5]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #050119 1px, transparent 1px), linear-gradient(to bottom, #050119 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
        }}
      />

      {/* Oversized ghost numeral */}
      <span
        className="absolute -right-8 top-4 select-none pointer-events-none font-serif leading-none text-[220px] md:text-[340px] xl:text-[420px] text-transparent hidden sm:block"
        style={{ WebkitTextStroke: '1px rgba(5,1,25,0.09)' }}
        aria-hidden="true"
      >
        {String(count).padStart(2, '0')}
      </span>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-16 md:pb-20">
        {/* Masthead meta bar */}
        <div className="flex items-center justify-between gap-4 border-b border-black/12 pb-4 mb-12">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#6b6b76] font-semibold">
            Service Pro Portfolio
          </span>
          <span className="hidden md:block h-px flex-1 bg-black/10" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#6b6b76] font-semibold">
            MMXXVI
          </span>
        </div>

        {/* Asymmetric headline block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-[42px] md:text-6xl xl:text-[76px] font-medium text-[#050119] leading-[1.02] tracking-tight">
              The companies
              <br />
              we build
              <span className="text-[#5e25fa]"> alongside.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-3">
            <div className="h-px w-full bg-black/12 mb-5 lg:hidden" />
            <p className="text-[#6b6b76] text-base leading-relaxed max-w-sm">
              Owner-operated businesses we back with the systems, software, and
              distribution to grow past what one person can carry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
