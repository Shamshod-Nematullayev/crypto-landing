import React from "react";
import Conteiner from "../Conteiner";
import Typography from "../Typography";
import Hexagon from "../Hexagon";

function FeatureSection() {
  return (
    <Conteiner>
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
        <div className="flex-1/2">
          <img
            src="https://polyfinex.com/assets/images/crypto/feature1_3d@2x.png"
            alt="feature1_3d"
            width={475}
          />
        </div>
      </div>
      <div className="flex justify-between h-[310px] mt-[100px] w-[80%] mx-auto">
        <div className="flex-1/2">
          <img
            src="https://polyfinex.com/assets/images/crypto/feature2_3d@2x.png"
            alt="feature1_3d"
            width={475}
          />
        </div>
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
      </div>
    </Conteiner>
  );
}

export default FeatureSection;
