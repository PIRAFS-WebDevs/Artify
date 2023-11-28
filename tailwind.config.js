/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      "dark-100": "#999999",
      "dark-200": "#3e3e3e",
      "dark-300": "#323232",
      "dark-400": "#212121",
      "dark-500": "#181818",

      primary: "#00b482",
      primarySec: "#00997d",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#00b482",
              // foreground: "#000000",
            },
            // focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
