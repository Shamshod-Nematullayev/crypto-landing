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
      <div
        className={`w-full min-h-[150%] absolute top-0 left-0 z-[-10] bg-cover bg-no-repeat dark:bg-gray-800 `}
      >
        <HeroBackground mode="light" />
        <div
          style={{
            color: "white",
          }}
        ></div>
        <HeroSection />
        <ResultsSection />
        <FeatureSection />
      </div>
    </div>
  );
}

export default App;
