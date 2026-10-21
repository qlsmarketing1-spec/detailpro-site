import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CalendlyButton from '@/components/ui/CalendlyButton';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Service Pro was started by Brady Schlapkohl, who built one of the largest detailing companies in Minneapolis within a year by applying modern systems to an old-fashioned industry.',
  alternates: { canonical: 'https://www.detailpro.tech/about' },
  openGraph: {
    title: 'About | Service Pro',
    description: 'Service Pro was started by Brady Schlapkohl, who built one of the largest detailing companies in Minneapolis within a year by applying modern systems to an old-fashioned industry.',
    url: 'https://www.detailpro.tech/about',
    images: ['/og/about.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/og/about.jpg'] },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': 'https://www.detailpro.tech/about#brady-schlapkohl',
            name: 'Brady Schlapkohl',
            jobTitle: 'Founder',
            image: 'https://www.detailpro.tech/images/team/brady-schlapkohl-founder-service-pro.webp',
            description:
              'Founder of Service Pro. Built Shine Squad into one of the largest detailing companies in Minneapolis within a year.',
            worksFor: { '@id': 'https://www.detailpro.tech/#organization' },
            url: 'https://www.detailpro.tech/about',
          }),
        }}
      />
      <Navbar />
      <main className="bg-white">
        {/* Masthead: page title + mission */}
        <div className="relative overflow-hidden border-b border-black/10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[440px] bg-[#5e25fa]/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
            {/* Eyebrow rule */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-10 bg-[#5e25fa]/40" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#5e25fa] font-semibold">
                About
              </span>
              <span className="h-px w-10 bg-[#5e25fa]/40" />
            </div>

            <h1 className="font-serif text-4xl md:text-5xl xl:text-[56px] font-medium text-[#050119] leading-[1.1] tracking-tight mb-8">
              About <span className="text-[#5e25fa]">Service Pro</span>
            </h1>

            {/* Mission statement */}
            <p className="text-[#6b6b76] text-lg leading-relaxed max-w-xl mx-auto">
              We&apos;re helping owners around the United States build the next generation of
              local service businesses.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-16 pb-24">
          {/* Founder intro */}
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-16 items-center mb-20">
            {/* Photo */}
            <div className="relative w-56 h-56 md:w-60 md:h-60 mx-auto md:mx-0 flex-shrink-0">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#5e25fa]/25 to-transparent rounded-full blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-[#5e25fa]/25">
                <Image
                  src="/images/team/brady-schlapkohl-founder-service-pro.webp"
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
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#050119] mb-5">
                Brady Schlapkohl
              </h2>
              <p className="text-[#6b6b76] text-lg leading-relaxed">
                In 2025 I ran one of the largest detailing companies in the state of Minnesota. I
                left it behind to help other local service business owners achieve the same
                success.
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 md:gap-16 items-start mb-20">
            {/* Text */}
            <div className="space-y-5 text-[#6b6b76] text-lg leading-relaxed">
              <p>
                Shine Squad started with one car and a basic set of detailing tools. About a
                year in, we were ahead of detailers who&apos;d been at it for over ten years.
              </p>
              <p>We didn&apos;t beat them by working harder. Everybody in detailing works hard.</p>
              <p>
                What we had was a system around the work. Calls got answered, even when every
                one of us had our hands on a car. Jobs got on the schedule. After a detail,
                customers heard from us again, and a lot of them booked again.
              </p>
              <p>
                Most small operators never get that built. They&apos;re doing the work all day.
                The phone, the schedule, and the follow-up get whatever time is left.
              </p>
              <p className="text-[#050119] font-medium">
                I started Service Pro so other owners can have that running behind them, too.
              </p>
            </div>

            {/* Team photo */}
            <div className="relative mx-auto md:mx-0 md:sticky md:top-24 w-full max-w-[280px]">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#5e25fa]/20 to-transparent rounded-[1.5rem] blur-xl" />
              <div className="relative rounded-[1.5rem] overflow-hidden border border-black/10 shadow-xl shadow-black/5">
                <Image
                  src="/images/clients/shine-squad/shine-squad-detailing-crew-team-photo.webp"
                  alt="Brady Schlapkohl with the Shine Squad detailing crew"
                  width={900}
                  height={1200}
                  sizes="(min-width: 768px) 280px, 90vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-[#6b6b76] text-sm text-center mt-3">
                The Shine Squad crew, Year 1.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="border-t border-black/10 pt-16 text-center max-w-3xl mx-auto">
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
