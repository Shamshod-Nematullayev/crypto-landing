import React from "react";
import Conteiner from "../Conteiner";
import Typography from "../Typography";
import Hexagon from "../Hexagon";

function FeatureSection() {
  return (
    <Conteiner>
      <div className="flex justify-between h-[310px]">
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
          />
        </div>
      </div>
    </Conteiner>
  );
}

export default FeatureSection;
