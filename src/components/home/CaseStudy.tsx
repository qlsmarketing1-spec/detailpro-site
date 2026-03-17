import CalendlyButton from '@/components/ui/CalendlyButton';

export default function CaseStudy() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#e7e6ee] mb-12">Real Shop Results</h2>
        <div className="bg-gradient-to-br from-[#0d0a2e] to-[#050119] border border-white/10 rounded-[2.5rem] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-14">
              <span className="text-[#5e25fa] text-sm font-semibold uppercase tracking-widest">Case Study: Shine Squad</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#e7e6ee] mt-4 mb-6">
                From 4 jobs a week to fully booked 14 days out.
              </h3>
              <blockquote className="italic text-[#a3a3a3] leading-relaxed border-l-4 border-[#5e25fa] pl-6 mb-8">
                &ldquo;I used to sit on Nextdoor begging for work. The DetailPro system changed the game and now all my booking is handled while I&apos;m working on cars. It&apos;s like having a full-time office manager for a fraction of the cost.&rdquo;
              </blockquote>
              <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-semibold px-8 py-3 rounded-full transition-colors">
                Start My Growth
              </CalendlyButton>
            </div>
            <div className="p-10 md:p-14 bg-gradient-to-br from-[#5e25fa]/30 to-[#280aa5]/20 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center border border-white/20">
                <p className="text-6xl font-black text-white mb-2">+42</p>
                <p className="text-[#e7e6ee] font-semibold">Booked Jobs In March</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
