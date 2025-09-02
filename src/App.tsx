import { MarketInfo } from "./components/MarketInfo";
import HeroSection from "./components/HeroSection";
import HeroBackground from "./components/HeroSection/HeroBackground";
import AnimationHeader from "./components/AnimationHeader";
import Hexagon from "./components/Hexagon";

function App() {
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
        <Hexagon size={300} colors={["#FFA000", "#FFECB3"]} /> {/* Sariq */}
        <Hexagon size={300} colors={["#d1c4e9", "#825ec4"]} /> {/* Ziyohrang */}
        <Hexagon size={300} colors={["#e1bee7", "#b258c2"]} /> {/* Binafsha */}
      </div>
    </div>
  );
}

export default App;
