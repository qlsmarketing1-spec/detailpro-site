import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import LogoTicker from '@/components/home/LogoTicker';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import HowItWorks from '@/components/home/HowItWorks';
import EconomicsSection from '@/components/home/EconomicsSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import GuaranteeSection from '@/components/home/GuaranteeSection';
import FAQSection from '@/components/home/FAQSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Hero + ticker share one continuous dark canvas so the violet glow bleeds through */}
        <div className="relative bg-[#050119] overflow-hidden">
          {/* Shared ambient violet glow — spans both sections */}
          <div className="absolute top-1/3 left-0 w-[800px] h-[800px] bg-[#5e25fa]/12 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#280aa5]/10 rounded-full blur-[120px] pointer-events-none" />
          <HeroSection />
          <LogoTicker />
        </div>
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <EconomicsSection />
        <TestimonialSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
