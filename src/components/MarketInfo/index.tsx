import Item from "./Item";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const cryptoDemoData: {
  imgUrl: string;
  name: string;
  percent: number;
  price: number;
}[] = [
  {
    imgUrl: "./src/assets/cryptoLogos/btc.png",
    name: "BTC",
    percent: 3,
    price: 10.2,
  },
  {
    imgUrl: "./src/assets/cryptoLogos/xrp.png",
    name: "XRP",
    percent: -3,
    price: 0.003,
  },
  {
    imgUrl: "./src/assets/cryptoLogos/nem.png",
    name: "NEM",
    percent: 3,
    price: 10.2,
  },
  {
    imgUrl: "./src/assets/cryptoLogos/iota.png",
    name: "IOTA",
    percent: -3,
    price: 0.01,
  },
  {
    imgUrl: "./src/assets/cryptoLogos/mnr.png",
    name: "MNR",
    percent: 3,
    price: 10.2,
  },
  {
    imgUrl: "./src/assets/cryptoLogos/byc.png",
    name: "BYC",
    percent: -3,
    price: 0.003,
  },
]; //

export function MarketInfo() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      playOnInit: true,
      delay: 4000,
    }),
  ]);

  return (
    <div className="left-0 flex items-center justify-center bg-white dark:bg-gray w-full h-[43px] z-50">
      <div className="overflow-hidden w-full h-[43px] " ref={emblaRef}>
        {/* Track */}
        <div className="flex items-center h-[43px]">
          {cryptoDemoData.map((item, i) => (
            <div
              key={i}
              className="flex-[0_0_20%] flex items-center justify-center"
            >
              <Item
                imgUrl={item.imgUrl}
                name={item.name}
                percent={item.percent}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
