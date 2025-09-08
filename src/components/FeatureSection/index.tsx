import { motion } from "framer-motion";
import Conteiner from "../Conteiner";
import Typography from "../Typography";
import Hexagon from "../Hexagon";
import Chart from "../Chart";
import { cryptoDemoData } from "../MarketInfo";
import BuffIcon from "../../assets/buff.svg";
import NerfIcon from "../../assets/nerf.svg";

function FeatureSection() {
  const cryptoStats: {
    name: string;
    percent: number;
    price: number;
    imgUrl: string;
    color: "green" | "red";
    data: { name: string; uv: number }[];
  }[] = [
    {
      name: cryptoDemoData[0].name,
      percent: cryptoDemoData[0].percent,
      price: cryptoDemoData[0].price,
      imgUrl: cryptoDemoData[0].imgUrl,
      color: "green",
      data: [
        { name: "1PM", uv: 8 },
        { name: "2PM", uv: 2 },
        { name: "3PM", uv: 9 },
        { name: "4PM", uv: 6 },
        { name: "5PM", uv: 4 },
        { name: "6PM", uv: 10 },
        { name: "7PM", uv: 3 },
        { name: "8PM", uv: 7 },
        { name: "9PM", uv: 5 },
        { name: "10PM", uv: 1 },
        { name: "11PM", uv: 9 },
        { name: "12PM", uv: 6 },
      ],
    },
    {
      name: cryptoDemoData[1].name,
      percent: cryptoDemoData[1].percent,
      price: cryptoDemoData[1].price,
      imgUrl: cryptoDemoData[1].imgUrl,
      color: "red",
      data: [
        { name: "1PM", uv: 4 },
        { name: "2PM", uv: 7 },
        { name: "3PM", uv: 2 },
        { name: "4PM", uv: 8 },
        { name: "5PM", uv: 6 },
        { name: "6PM", uv: 3 },
        { name: "7PM", uv: 10 },
        { name: "8PM", uv: 5 },
        { name: "9PM", uv: 1 },
        { name: "10PM", uv: 9 },
        { name: "11PM", uv: 7 },
        { name: "12PM", uv: 2 },
      ],
    },
    {
      name: cryptoDemoData[2].name,
      percent: cryptoDemoData[2].percent,
      price: cryptoDemoData[2].price,
      imgUrl: cryptoDemoData[2].imgUrl,
      color: "green",
      data: [
        { name: "1PM", uv: 3 },
        { name: "2PM", uv: 9 },
        { name: "3PM", uv: 6 },
        { name: "4PM", uv: 4 },
        { name: "5PM", uv: 8 },
        { name: "6PM", uv: 2 },
        { name: "7PM", uv: 10 },
        { name: "8PM", uv: 7 },
        { name: "9PM", uv: 5 },
        { name: "10PM", uv: 1 },
        { name: "11PM", uv: 9 },
        { name: "12PM", uv: 6 },
      ],
    },
    {
      name: cryptoDemoData[3].name,
      percent: cryptoDemoData[3].percent,
      price: cryptoDemoData[3].price,
      imgUrl: cryptoDemoData[3].imgUrl,
      color: "red",
      data: [
        { name: "1PM", uv: 7 },
        { name: "2PM", uv: 1 },
        { name: "3PM", uv: 9 },
        { name: "4PM", uv: 5 },
        { name: "5PM", uv: 2 },
        { name: "6PM", uv: 8 },
        { name: "7PM", uv: 3 },
        { name: "8PM", uv: 10 },
        { name: "9PM", uv: 6 },
        { name: "10PM", uv: 4 },
        { name: "11PM", uv: 9 },
        { name: "12PM", uv: 2 },
      ],
    },
  ];

  return (
    <Conteiner className="mb-[100px]">
      <div className="flex justify-between h-[310px] mt-[100px] w-[80%] mx-auto">
        <div className="flex-1/2">
          <Hexagon />
          <h1>
            <Typography variant="h1">Smart Investments</Typography>
          </h1>
          <p>
            <Typography variant="body1">
              Time is money. Don’t wait for a transaction to end: open several
              positions at the same time and continue trading.
            </Typography>
          </p>
        </div>
        <motion.div
          className="flex-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            src="https://polyfinex.com/assets/images/crypto/feature1_3d@2x.png"
            alt="feature1_3d"
            width={475}
          />
        </motion.div>
      </div>
      <div className="flex justify-between h-[310px] mt-[100px] w-[80%] mx-auto">
        <motion.div
          className="flex-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            src="https://polyfinex.com/assets/images/crypto/feature2_3d@2x.png"
            alt="feature1_3d"
            width={475}
          />
        </motion.div>
        <div className="flex-1/2">
          <Hexagon />
          <h1>
            <Typography variant="h1">Security First</Typography>
          </h1>
          <p>
            <Typography variant="body1">
              Security will always be a top priority in every decision we make,
              we incorporate multiple layers of protection.
            </Typography>
          </p>
        </div>
      </div>
      <div className="flex flex-col text-center items-center">
        <h1>
          <Typography variant="h1">Trade smarter</Typography>
        </h1>
        <p className="w-[80%]">
          <Typography variant="body1">
            Trade dozens of crypto assets, from BTC and ETH to popular altcoins
            and stablecoins to innovative new projects.
          </Typography>
        </p>
        <ul>
          {cryptoStats.map((item, index) => (
            <li
              className="flex items-center gap-2 w-[800px] h-[80px]"
              key={index}
            >
              <img src={item.imgUrl} alt="Bitcoin" className="w-[50px]" />
              <Typography variant="body1">{item.name}</Typography>
              <div className="flex flex-col mx-5">
                <p className="text-2xl font-bold">${1234}</p>
                <span
                  className={
                    (item.percent > 0 ? "text-success" : "text-error") +
                    " flex items-center gap-1 text-[20px]"
                  }
                >
                  (
                  {item.percent > 0 ? (
                    <img
                      src={BuffIcon}
                      alt="Buff"
                      className="w-[8px] h-[8px]"
                    />
                  ) : (
                    <img
                      src={NerfIcon}
                      alt="Nerf"
                      className="w-[8px] h-[8px]"
                    />
                  )}
                  {item.percent}% )
                </span>
              </div>
              <Chart data={item.data} color={item.color} />
            </li>
          ))}
        </ul>
      </div>
    </Conteiner>
  );
}

export default FeatureSection;
