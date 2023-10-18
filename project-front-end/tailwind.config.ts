import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          800: "#4529E6",
          700: "#5126EA",
          500: "#B0A6f0",
          300: "#EDEAFD",
        },
        grey: {
          900: "#0b0D0D",
          800: "#212529",
          700: "#495057",
          600: "#868E96",
          500: "#ADB5BD",
          400: "#CED4DA",
          300: "#DEE2E6",
          200: "#E9ECEF",
          100: "#F1F3F5",
          70: "#F8F9FA",
          50: "#FDFDFD",
        },
        white: {
          500: "#FFFFFF",
        },
        red: {
          500: "#CD2B31",
          200: "#FDD8D8",
          100: "#FFE5E5",
        },
        green: {
          800: "#153D2E",
          700: "#18794E",
          600: "#2A7D5F",
          500: "#349974",
          300: "#CCEBD7",
          200: "#DDF3E4",
        },
        pink: {
          800: "#7D2A4D",
          700: "#C04277",
          600: "#E34D8C",
        },
        purple: {
          900: "#36007D",
          800: "#30007D",
          700: "#6200E3",
          600: "#5700E3",
          500: "#6200E3",
          400: "#7000FF",
          300: "#6100FF",
        },
      },
    },
  },
  //"prettier-plugin-tailwindcss"
  plugins: [],
};
export default config;
