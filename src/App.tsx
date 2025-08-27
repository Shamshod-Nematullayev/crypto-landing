import { MarketInfo } from "./components/MarketInfo";
import Conteiner from "./components/Conteiner";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="flex flex-col items-center">
      <MarketInfo />
      <HeroSection />
    </div>
  );
}

export default App;
