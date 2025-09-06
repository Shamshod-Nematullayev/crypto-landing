import { div } from "framer-motion/client";

// components/HeroBackground.tsx
type HeroBackgroundProps = {
  mode?: "light" | "dark";
  opacity?: number;
  id?: string;
};

export default function HeroBackground({
  mode = "light",
  opacity,
  id = "heroGradient",
}: HeroBackgroundProps) {
  // Gradient ranglari mode ga qarab belgilanadi
  const gradients = {
    light: { from: "#FFECB3", to: "#E1BEE7", defaultOpacity: 0.25 },
    dark: { from: "#6A1B9A", to: "#FF6F00", defaultOpacity: 0.25 },
  };

  const { from, to, defaultOpacity } = gradients[mode];

  return (
    <div className="w-full min-h-[150%] absolute top-0 left-0 z-[-10] bg-cover bg-no-repeat dark:bg-gray-800">
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        viewBox="0 0 1440 961"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          opacity={opacity ?? defaultOpacity}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M206.384 884.42C112.953 870.39 35.2162 805.891 8.72828 715.201C-89.8025 377.85 -284.443 -425.572 96.749 -425.594C409.6 -425.613 1099.5 -117.886 1545.95 98.5031C1725.87 185.707 1730 435.221 1555.86 533.45L856.533 927.913C807.41 955.621 750.437 966.122 694.663 957.746L206.384 884.42Z"
          fill={`url(#${id})`}
        />
        <defs>
          <linearGradient
            id={id}
            x1="-781.079"
            y1="671.645"
            x2="865.977"
            y2="1423.58"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
