import Conteiner from "../Conteiner";
import Hexagon from "../Hexagon";
import Typography from "../Typography";
import Slider from "./Slider";

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
        <Slider />
        <Hexagon className="mx-auto mt-20" />
        <h1>
          <Typography variant="h1">Top Coins Today</Typography>
        </h1>
        <p>
          <Typography variant="body1">
            Cras convallis lacus orci, tristique tincidunt magna consequat in.
            In vel est, at euismod libero.
          </Typography>
        </p>
        <Hexagon colors={["#E1BEE7", "#FFECB3"]} />
        {/* <div
          className="w-[50px] h-[50px] bg-gradient-to-b from-purple-300 to-yellow-200 clip-hexagon"
          style={{
            clipPath: `path( "M0 12.9756V30.0245C0 31.6147 0.83882 33.0842 2.20055 33.8792L16.7995 42.4037C18.1612 43.1988 19.8388 43.1988 21.2005 42.4037L35.7995 33.8792C37.1612 33.0842 38 31.6147 38 30.0245V12.9756C38 11.3853 37.1612 9.91592 35.7995 9.12076L21.2005 0.596317C19.8388 -0.198772 18.1612 -0.198772 16.7995 0.596317L2.20055 9.12076C0.83882 9.91592 0 11.3853 0 12.9756Z" )`,
          }}
        ></div> */}
      </Conteiner>
    </div>
  );
}

export default BenefitSection;
