import React from "react";

interface HexagonProps {
  size?: number; // svg o'lchami (width/height)
  colors?: [string, string]; // gradient ranglari
  rotate?: number; // Z o'qi bo'yicha aylanish
  className?: string; // qo'shimcha style uchun
}

function Hexagon({
  size = 40,
  colors = ["#E1BEE7", "#FFECB3"],
  rotate = 0,
  className = "",
}: HexagonProps) {
  const gradientId = `hexagon-gradient-${colors[0]}-${colors[1]}`;

  return (
    <svg
      width={size}
      height={(size * 43) / 38} // original proportion (38x43)
      viewBox="0 0 38 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.9756V30.0245C0 31.6147 0.83882 33.0842 2.20055 33.8792L16.7995 42.4037C18.1612 43.1988 19.8388 43.1988 21.2005 42.4037L35.7995 33.8792C37.1612 33.0842 38 31.6147 38 30.0245V12.9756C38 11.3853 37.1612 9.91592 35.7995 9.12076L21.2005 0.596317C19.8388 -0.198772 18.1612 -0.198772 16.7995 0.596317L2.20055 9.12076C0.83882 9.91592 0 11.3853 0 12.9756Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="-6.69026"
          y1="2.7369"
          x2="-15.1432"
          y2="43.4444"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors[0]} />
          <stop offset="1" stopColor={colors[1]} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Hexagon;
