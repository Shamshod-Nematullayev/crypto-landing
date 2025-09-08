import Conteiner from "../Conteiner";
import Hexagon from "../Hexagon";
import Typography from "../Typography";
import ScreenshotSlider from "./ScreenshotSlider";
import TopcoinsSlider from "./TopcoinsSlider";

function BenefitSection() {
  return (
    <div className="relative w-full">
      <div className="z-[-10] w-full h-[815px] absolute top-0 left-0 bg-linear-to-b from-0% from-[#E1BEE7] dark:from-[#6A1B9A] via-100% via-[#FFECB3] dark:via-[#FF6F00] to-100% to-[#FFECB3] dark:to-[#FF6F00] opacity-[0.2985]" />
      <Conteiner>
        <h1 className="mt-[80px] text-center">
          <Typography variant="h1">Interdum et malesuada fames</Typography>
        </h1>
        <p className="text-center">
          <Typography variant="body1">
            Cras convallis lacus orci, tristique tincidunt magna consequat in.
            In vel est, at euismod libero.
          </Typography>
        </p>
        <ScreenshotSlider />
        <Hexagon className="mx-auto mt-20" />
        <h1 className="text-center">
          <Typography variant="h1">Top Coins Today</Typography>
        </h1>
        <p className="text-center">
          <Typography variant="body1">
            Cras convallis lacus orci, tristique tincidunt magna consequat in.
            In vel est, at euismod libero.
          </Typography>
        </p>
      </Conteiner>
      <TopcoinsSlider />
    </div>
  );
}

export default BenefitSection;
