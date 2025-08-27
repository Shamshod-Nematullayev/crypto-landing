import Header from "./Header";
import Mask from "../../assets/Mask.svg";
import Banner1 from "../../assets/Banner1.png";
import Conteiner from "../Conteiner";
import Typography from "../Typography";

function HeroSection() {
  console.log("Mask:", Mask);
  return (
    <Conteiner>
      <Header />
      <div
        className={`w-full min-h-full absolute top-0 left-0 z-[-99] bg-cover bg-no-repeat`}
      >
        <img
          src={Mask}
          className={`w-full min-h-full absolute top-0 left-0 z-[-100]`}
        />
      </div>
      <div className="flex items-center justify-between h-[400px] mt-10">
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
      </div>
      <div className="flex items-center justify-between mt-10">
        <Tab
          title="Business Solution?"
          description="Interdum et malesuada ac antestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula suscipit orci. "
          active
        />
        <Tab
          title="Free project quote"
          description="Interdum et malesuada ac antestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula suscipit orci. "
        />
        <Tab
          title="Nulla lobortis nunc"
          description="Interdum et malesuada ac antestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula suscipit orci. "
        />
      </div>
    </Conteiner>
  );
}

export default HeroSection;

function Tab({
  title,
  description,
  active,
}: {
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-5 h-20">
      <div className="w-[2px] h-[80%] bg-gray-400"></div>

      <div className="cursor-pointer">
        <h2>
          <Typography
            variant="h2"
            className={(active ? "text-secondary" : "") + " font-bold"}
          >
            {title}
          </Typography>
        </h2>
        <p>
          <Typography
            variant="body1"
            className={
              (active ? "text-primary" : "") + " block truncate w-[400px]"
            }
          >
            {description}
          </Typography>
        </p>
      </div>
    </div>
  );
}
