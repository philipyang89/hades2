import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        lato: ["Lato", "sans-serif"],
        noto: ['"Noto Sans"', "sans-serif"],
        caesar: ['"Caesar Dressing"', "system-ui"],
        crimson: ['"Crimson Text"', "serif"],
        safelist: ['font-spectralsc'],
      },
    },
  },
  plugins: [],
};

export default config;
