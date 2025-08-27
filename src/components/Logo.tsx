import React from "react";
import LogoImg from "../assets/Luxi-Hosting-Logo.png";

function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <img src={LogoImg} alt="Logo" className="w-[55px] h-[55px]" />
      <span className="text-[36px] font-semibold">Crypto</span>
    </div>
  );
}

export default Logo;
