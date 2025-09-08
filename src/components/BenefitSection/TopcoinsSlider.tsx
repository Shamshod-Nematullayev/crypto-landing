import useEmblaCarousel from "embla-carousel-react";
import { cryptoDemoData } from "../MarketInfo";
import {
  ChevronLeft,
  ChevronLeftIcon,
  FlameIcon,
  MoveLeftIcon,
} from "lucide-react";
import Typography from "../Typography";
import BuffIcon from "../../assets/buff.svg";
import NerfIcon from "../../assets/nerf.svg";

function TopcoinsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });
  return (
    <div
      className="overflow-hidden w-full h-[400px] relative border-1 flex items-center"
      ref={emblaRef}
    >
      <div className="flex w-full gap-5">
        <div
          className={
            "flex-[0_0_25%] flex flex-col items-center justify-center w-[360px] h-[300px]  rounded-md transition duration-300 cursor-pointer "
          }
        ></div>
        {cryptoDemoData.map((item, i) => (
          <Card key={i} className={i === 0 ? "bg-primary" : ""} item={item} />
        ))}
      </div>
      <div className="w-full h-full absolute top-0 flex justify-between items-center">
        <button className="bg-accent text-white text-[50px]">
          <ChevronLeftIcon size={50} />
        </button>
        <b>2</b>
      </div>
    </div>
  );
}

function Card({
  className = "",
  item,
}: {
  className: string;
  item: { imgUrl: string; name: string; percent: number; price: number };
}) {
  return (
    <div
      className={"flex-[0_0_20%] flex flex-col items-center justify-center w-[360px] h-[300px] bg-white dark:bg-gray-500 hover:border-1 border-primary rounded-md shadow-lg hover:shadow-2xl transition duration-300 ".concat(
        className
      )}
    >
      <div className="flex justify-between">
        <img src={item.imgUrl} alt="Bitcoin" className="w-[80px] h-[80px]" />
        <div className="ml-3">
          <div className="flex items-center gap-3">
            <div className="text-[24px] inline-block font-bold">
              {item.name}
            </div>
            <div className="text-[16px] inline-block px-3 py-1 bg-gray-200 rounded-md">
              USD
            </div>
            <div />
          </div>
          <p className="mt-2">
            <FlameIcon size={16} className="inline text-orange-500" /> Top
            volume
          </p>
        </div>
      </div>
      <h1>
        <Typography variant="h1">$ {(12345675).toLocaleString()}</Typography>
      </h1>
      <div className="flex justify-between w-full px-15">
        <div>
          <div className="flex items-center gap-1">
            {item.percent > 0 ? (
              <img src={BuffIcon} alt="Buff" className="w-[8px] h-[8px]" />
            ) : (
              <img src={NerfIcon} alt="Nerf" className="w-[8px] h-[8px]" />
            )}
            {item.percent}%
          </div>
          <p className="text-[14px] italic text-gray-400">24h change</p>
        </div>
        <div>
          <div>123, 456, 789, 101</div>
          <p className="text-[14px] italic text-gray-400">24h volume</p>
        </div>
      </div>
    </div>
  );
}

export default TopcoinsSlider;
