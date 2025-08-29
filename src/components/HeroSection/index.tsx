import Header from "../Header";
import Mask from "../../assets/Mask.svg";
import Conteiner from "../Conteiner";
import Slider from "./Slider";
import HeroBackground from "./HeroBackground";

function HeroSection() {
  return (
    <Conteiner className="inset-0">
      <Header />

      {/* Main Content + Slider */}
      {/* <div className="flex items-center justify-between h-[400px] mt-10">
        <div className="w-[50%] h-[400px] flex flex-col justify-around">
          <Typography variant="h1">
            Digital currency leads at market in the right amount.
          </Typography>
          <p>
            <Typography variant="body1">
              Vestibulum faucibus eget erat eget pretium. Donec commodo
              convallis ligula suscipit orci.{" "}
            </Typography>
          </p>
          <div className="flex gap-5">
            <button className="px-6 py-2 bg-primary text-white font-semibold hover:bg-secondary-dark transition duration-200 cursor-pointer rounded-md uppercase">
              Get Started
            </button>
            <button className="px-6 py-2 border-1 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition duration-200 cursor-pointer rounded-md uppercase">
              View Market
            </button>
          </div>
        </div>
        <div
          className="w-[50%] h-[400px] bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${Banner1})` }}
        ></div>
      </div> */}
      <Slider />
    </Conteiner>
  );
}

export default HeroSection;
