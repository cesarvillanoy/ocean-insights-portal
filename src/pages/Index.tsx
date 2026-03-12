import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResultsPreview from "@/components/ResultsPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ResultsPreview />
      <Footer />
    </div>
  );
};

export default Index;
