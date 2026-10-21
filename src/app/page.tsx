import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import LegacyToolsSection from '@/components/home/LegacyToolsSection';
import SolutionSection from '@/components/home/SolutionSection';
import HowItWorks from '@/components/home/HowItWorks';
import MechanismSection from '@/components/home/MechanismSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import FAQSection from '@/components/home/FAQSection';
import FinalCTA from '@/components/home/FinalCTA';
import { HOME_FAQS, faqJsonLd } from '@/data/faqs';

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(HOME_FAQS)) }} />
      <Navbar />
      <main>
        <div className="relative bg-white overflow-hidden">
          {/* Ambient violet glow */}
          <div className="absolute top-1/3 left-0 w-[800px] h-[800px] bg-[#5e25fa]/12 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#280aa5]/10 rounded-full blur-[120px] pointer-events-none" />
          <HeroSection />
        </div>
        <LegacyToolsSection />
        <SocialProofSection />
        <SolutionSection />
        <HowItWorks />
        <MechanismSection />
        <IndustriesSection />
        <ComparisonSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
