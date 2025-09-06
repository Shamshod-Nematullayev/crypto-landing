import { MarketInfo } from "./components/MarketInfo";
import HeroSection from "./components/HeroSection";
import HeroBackground from "./components/HeroSection/HeroBackground";
import AnimationHeader from "./components/AnimationHeader";
import Hexagon from "./components/Hexagon";
import ResultsSection from "./components/ResultsSection";
import VideoModal from "./components/ResultsSection/VideoModal";
import FeatureSection from "./components/FeatureSection";

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
    </div>
  );
}

export default App;
