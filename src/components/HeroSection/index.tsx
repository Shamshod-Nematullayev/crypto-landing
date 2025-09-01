import Header from "../Header";
import Conteiner from "../Conteiner";
import Slider from "./Slider";

function HeroSection() {
  return (
    <Conteiner className="mt-[43px]">
      <Header />
      <Slider />
    </Conteiner>
  );
}

export default HeroSection;
