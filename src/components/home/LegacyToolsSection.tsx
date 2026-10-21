import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

export default function LegacyToolsSection() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
        {/* Text */}
        <Reveal>
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Our Mission</p>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-[44px] font-medium text-[#050119] leading-[1.15] tracking-tight mb-6">
            There are millions to be made in your hometown.
          </h2>
          <div className="space-y-4 text-[#6b6b76] text-lg leading-relaxed max-w-lg">
            <p>
              Local service is one of the most overlooked paths to building wealth, and the
              industry is changing fast.
            </p>
            <p>
              Starting one is easy. Building one that works is not. Roughly half of new businesses
              don&apos;t make it to year five.
            </p>
            <p>
              Service Pro exists to take the risk out of starting and scaling a local service
              business. We bring the technology, systems, and mentorship. You build the company.
            </p>
            <p className="text-[#050119] font-medium">One market. Then another. Then another.</p>
          </div>
        </Reveal>

        {/* Photo */}
        <Reveal delay={120} className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-[#5e25fa]/20 via-[#280aa5]/10 to-transparent rounded-[2rem] blur-xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-black/10 shadow-xl shadow-black/5">
            <Image
              src="/images/clients/shine-squad/shine-squad-technicians-detailing-cars-a-frame-sign.webp"
              alt="Two technicians detailing cars in a driveway for a local auto detailing business"
              width={800}
              height={480}
              className="w-full h-[340px] md:h-[420px] object-cover object-[50%_22%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
