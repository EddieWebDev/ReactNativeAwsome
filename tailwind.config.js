/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: "#afd69b",
      secondary: "#b7cc9d",
      tertiary: "#a6dbbc",
      accent: "#8fb6ab",
      accentSecondary: "#8ca19e",
    },
    extend: {},
  },
  plugins: [],
};
