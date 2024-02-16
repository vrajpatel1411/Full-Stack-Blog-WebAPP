import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#1d4ed8",
      white: "#ffffff",
      gray: " #4b5563",
      "titan-white": "#f1eeff",
      indigo: "#6558d3",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        transform1: {
          "0%": {
            transform: "translateX(100%)",
          },
          "50%": {
            transform: "translateX(50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "custom-menu": "transform1 .5s linear ",
      },
    },
  },
  plugins: [],
};
export default config;
