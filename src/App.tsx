import { MarketInfo } from "./components/MarketInfo";
import Conteiner from "./components/Conteiner";
import HeroSection from "./components/HeroSection";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

function App() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (emblaApi) {
      console.log("Embla API ready!");
    }
  }, [emblaApi]);

  return (
    <div className="flex flex-col items-center">
      <MarketInfo />
      <HeroSection />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] bg-primary text-white p-10">
            Slide 1
          </div>
          <div className="flex-[0_0_100%] bg-secondary text-white p-10">
            Slide 2
          </div>
          <div className="flex-[0_0_100%] bg-accent text-white p-10">
            Slide 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
