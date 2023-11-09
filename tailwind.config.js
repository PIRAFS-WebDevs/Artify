/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      "dark-100": "#999999",
      "dark-200": "#3e3e3e",
      "dark-300": "#323232",
      "dark-350": "#212121",
      "dark-400": "#252525",
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
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
};
