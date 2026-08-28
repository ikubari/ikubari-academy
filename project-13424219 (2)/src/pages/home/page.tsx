import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import PromiseSection from './components/PromiseSection';
import WhoIsItForSection from './components/WhoIsItForSection';
import DevelopmentTracksSection from './components/DevelopmentTracksSection';
import CoreSkillsSection from './components/CoreSkillsSection';
import CreativeMindSection from './components/CreativeMindSection';
import ThreePillarsSection from './components/ThreePillarsSection';
import LearningExperienceSection from './components/LearningExperienceSection';
import ProgressionSection from './components/ProgressionSection';
import FacilitatorsSection from './components/FacilitatorsSection';
import PartnershipEcosystemSection from './components/PartnershipEcosystemSection';
import ImpactSection from './components/ImpactSection';
import FinalCtaSection from './components/FinalCtaSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      <main>
        <HeroSection />
        <PromiseSection />
        <WhoIsItForSection />
        <DevelopmentTracksSection />
        <CoreSkillsSection />
        <CreativeMindSection />
        <ThreePillarsSection />
        <LearningExperienceSection />
        <ProgressionSection />
        <FacilitatorsSection />
        <PartnershipEcosystemSection />
        <ImpactSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}