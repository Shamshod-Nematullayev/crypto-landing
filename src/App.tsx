import { MarketInfo } from "./components/MarketInfo";
import HeroSection from "./components/HeroSection";
import HeroBackground from "./components/HeroSection/HeroBackground";
import AnimationHeader from "./components/AnimationHeader";
import ResultsSection from "./components/ResultsSection";
import FeatureSection from "./components/FeatureSection";
import BenefitSection from "./components/BenefitSection";

function App() {
  const theme = localStorage.getItem("theme");
  console.log({ theme });
  return (
    <div className="flex flex-col items-center  z-[-9999]">
      <MarketInfo />
      <AnimationHeader />
      {/* Background */}
      <HeroBackground mode="light" />
      <HeroSection />
      <ResultsSection />
      <FeatureSection />
      <BenefitSection />
    </div>
  );
}

export default App;
