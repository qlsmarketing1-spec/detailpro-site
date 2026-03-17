import CalendlyButton from '@/components/ui/CalendlyButton';

export default function FinalCTA() {
  return (
    <section className="py-32 px-4 text-center bg-gradient-to-b from-[#050119] to-[#0d0526]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#e7e6ee] leading-tight mb-8">
          Fill your calendar.
        </h2>
        <p className="text-[#a3a3a3] text-xl mb-4">
          Stop letting leads die in your inbox. Switch on the DetailPro system and start scaling your shop.
        </p>
        <p className="text-[#e7e6ee] font-bold text-xl mb-12">Only pay for results.</p>
        <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-semibold px-10 py-5 rounded-full text-xl transition-colors">
          Book A Demo Now
        </CalendlyButton>
      </div>
    </section>
  );
}
