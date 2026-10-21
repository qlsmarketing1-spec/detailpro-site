import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

export default function SocialProofSection() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
        {/* Collage — left on desktop, below the copy on mobile */}
        <Reveal delay={120} className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 bg-gradient-to-br from-[#5e25fa]/20 via-[#280aa5]/10 to-transparent rounded-[2rem] blur-xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-black/10 shadow-xl shadow-black/5">
            <Image
              src="/images/misc/local-service-owner-testimonials-and-booked-weekend-collage.webp"
              alt="Messages and comments from local service business owners — a detailer booking his first customer from Nextdoor, an operator ranking his website on Google in under two weeks, and a $1,054 Saturday booked without chasing a single customer"
              width={1182}
              height={665}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto"
            />
          </div>
        </Reveal>

        {/* Text — a single standalone statement, not an intro line for copy that follows */}
        <Reveal className="order-1 lg:order-2">
          <div className="w-12 h-1 rounded-full bg-[#5e25fa] mb-6" />
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-5">The People Behind It</p>
          <h2 className="font-serif text-4xl md:text-5xl xl:text-[52px] font-medium text-[#050119] leading-[1.12] tracking-tight max-w-lg">
            Behind every message is an owner who bet on themselves.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
