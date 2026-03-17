import Image from 'next/image';
import CalendlyButton from '@/components/ui/CalendlyButton';

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#5e25fa]/20 border border-[#5e25fa]/30 rounded-full px-4 py-2 mb-8">
          <span className="bg-[#5e25fa] text-white text-xs font-semibold px-2 py-0.5 rounded-full">Built By Detailers</span>
          <span className="text-[#e7e6ee] text-sm">The Growth Partner for High-Performance Shops</span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#e7e6ee] leading-tight mb-4">
          Auto Detailing Software for<br className="hidden md:block" /> Shops Ready to Scale
        </h1>
        <p className="text-3xl md:text-5xl font-bold mb-8">
          <span className="font-serif-italic text-[#5e25fa]">Built to generate booked jobs.</span>
        </p>

        {/* Subtext */}
        <p className="text-[#a3a3a3] text-lg md:text-xl max-w-2xl mx-auto mb-10">
          We help serious detailers install systems for ads, follow-up, booking, and fleet work — so growth feels predictable, not chaotic.
        </p>

        {/* CTA */}
        <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors mb-10">
          Book My Free Demo
        </CalendlyButton>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex -space-x-2">
            <Image src="https://picsum.photos/seed/face1/40/40" alt="Detailer" width={36} height={36} className="rounded-full border-2 border-[#050119]" unoptimized />
            <Image src="https://picsum.photos/seed/face2/40/40" alt="Detailer" width={36} height={36} className="rounded-full border-2 border-[#050119]" unoptimized />
            <Image src="https://picsum.photos/seed/face3/40/40" alt="Detailer" width={36} height={36} className="rounded-full border-2 border-[#050119]" unoptimized />
          </div>
          <span className="text-[#a3a3a3] text-sm">Join the detailers scaling their shops with DetailPro.</span>
        </div>

        {/* VSL placeholder */}
        <CalendlyButton className="w-full max-w-3xl mx-auto block">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0d0a2e] border border-white/10 cursor-pointer group">
            <Image
              src="https://picsum.photos/seed/detailingvsl/1200/675"
              alt="DetailPro demo video"
              fill
              className="object-cover opacity-60 group-hover:opacity-70 transition-opacity"
              unoptimized
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#5e25fa]/90 rounded-full p-5 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            {/* Bottom-left overlay */}
            <div className="absolute bottom-4 left-4 text-left">
              <p className="text-white font-bold text-sm">From $5k to $22k/mo in 90 Days</p>
              <p className="text-[#e7e6ee]/70 text-xs">See the exact system used by CleanAuto Detailing</p>
            </div>
          </div>
        </CalendlyButton>
      </div>
    </section>
  );
}
