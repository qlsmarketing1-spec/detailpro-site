import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CalendlyButton from '@/components/ui/CalendlyButton';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-24">
          {/* Founder intro */}
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-16 items-center mb-20">
            {/* Photo */}
            <div className="relative w-56 h-56 md:w-60 md:h-60 mx-auto md:mx-0 flex-shrink-0">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#5e25fa]/25 to-transparent rounded-full blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-[#5e25fa]/25">
                <Image
                  src="/images/brady.jpeg"
                  alt="Brady Schlapkohl, founder of Service Pro"
                  fill
                  sizes="240px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-3">Founder</p>
              <h1 className="font-serif text-4xl md:text-5xl font-medium text-[#050119] mb-5">
                Brady Schlapkohl
              </h1>
              <p className="text-[#6b6b76] text-lg leading-relaxed mb-4">
                Before Service Pro, I spent years building and running one of the largest car
                detailing companies in the state of Minnesota.
              </p>
              <p className="text-[#6b6b76] text-lg leading-relaxed">
                Along the way, I realized how big the gap was between the top 5% of local
                service businesses and the rest. It wasn&apos;t the operators with 20+ years in
                business — it was the newcomers who knew how to build a system around their
                service.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="border-t border-black/10 pt-16 text-center max-w-3xl mx-auto">
            <p className="font-serif-italic text-2xl md:text-3xl text-[#050119] leading-relaxed mb-6">
              &ldquo;That&apos;s why I created Service Pro — to empower the next generation of
              local entrepreneurs.&rdquo;
            </p>
            <p className="text-[#6b6b76] text-lg leading-relaxed mb-10">
              We&apos;re building the systems that let a new business start strong instead of
              guessing for years — and the systems that let an established business finally run
              without being chained to it every hour.
            </p>
            <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(94,37,250,0.4)]">
              Book a Free Strategy Call
            </CalendlyButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
