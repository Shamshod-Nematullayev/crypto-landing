import Conteiner from "../Conteiner";
import Item from "./Item";

const data: { imgUrl: string; name: string; percent: number; price: number }[] =
  [
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
  return (
    <div className="left-0 flex items-center justify-center bg-white dark:bg-gray w-full h-[43px] z-50">
      <Conteiner>
        <div className="flex items-center justify-between w-full h-[43px] text-[14px]">
          {data.map((item, i) => (
            <Item
              key={i}
              imgUrl={item.imgUrl}
              name={item.name}
              percent={item.percent}
              price={item.price}
            />
          ))}
        </div>
      </Conteiner>
    </div>
  );
}
