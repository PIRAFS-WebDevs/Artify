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
      "light-100": "#ffffff",
      "light-150": "#f2f2f2",
      "light-200": "#f9f9f9",
      "light-300": "#ededed",
      "light-400": "#e6e6e6",
      "light-500": "#d2d2d2",

      primary: "#27963C",
      primarySec: "#80CC28",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#27963C",
            },
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#27963C",
            },
          },
        },
      },
    }),
  ],
};
