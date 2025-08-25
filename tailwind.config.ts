import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9C27B0",
          light: "#E1BEE7",
          dark: "#6A1B9A",
        },
        secondary: {
          DEFAULT: "#FFA000",
          light: "#FFECB3",
          dark: "#FF6F00",
        },
        accent: {
          DEFAULT: "#673AB7",
          light: "#D1C4E9",
          dark: "#4527A0",
        },
        gray: {
          DEFAULT: "#424242",
          dark: "#303030",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
};

export default config;
