import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import LegacyToolsSection from '@/components/home/LegacyToolsSection';
import MechanismSection from '@/components/home/MechanismSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative bg-white overflow-hidden">
          {/* Ambient violet glow */}
          <div className="absolute top-1/3 left-0 w-[800px] h-[800px] bg-[#5e25fa]/12 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#280aa5]/10 rounded-full blur-[120px] pointer-events-none" />
          <HeroSection />
        </div>
        <LegacyToolsSection />
        <MechanismSection />
        <IndustriesSection />
        <ComparisonSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
