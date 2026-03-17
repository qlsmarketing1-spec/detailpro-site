import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import LogoTicker from '@/components/home/LogoTicker';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionGrid from '@/components/home/SolutionGrid';
import HowItWorks from '@/components/home/HowItWorks';
import AutomationVisual from '@/components/home/AutomationVisual';
import CaseStudy from '@/components/home/CaseStudy';
import GuaranteeSection from '@/components/home/GuaranteeSection';
import FAQSection from '@/components/home/FAQSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <LogoTicker />
        <ProblemSection />
        <SolutionGrid />
        <HowItWorks />
        <AutomationVisual />
        <CaseStudy />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
