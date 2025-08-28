import { MarketInfo } from "./components/MarketInfo";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col items-center">
      <MarketInfo />
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
