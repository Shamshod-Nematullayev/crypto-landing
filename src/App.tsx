import { MarketInfo } from "./components/MarketInfo";
import HeroSection from "./components/HeroSection";
import HeroBackground from "./components/HeroSection/HeroBackground";
import AnimationHeader from "./components/AnimationHeader";

function App() {
  return (
    <div className="flex flex-col items-center  z-[-9999]">
      <MarketInfo />
      {/* Background */}
      <div
        className={`w-full min-h-[150%] absolute top-0 left-0 z-[-10] bg-cover bg-no-repeat dark:bg-gray-800`}
      >
        <HeroBackground mode="dark" />
        <HeroSection />
      </div>
      <AnimationHeader />
    </div>
  );
}

export default App;
