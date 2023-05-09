/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wave: "url('/dark_wave.svg')",
        kylie: "url('/bg.svg')",
      },
      colors: {
        // "tea-green": "#D2E0BF",
        "tea-green": "#C7D0C2",
        "naples-yellow": "#F9DB6D",
        "deep-green": "#1A4031",
        rose: "#AA9ABA",
        "deep-blue": "#464D77",
        straw: "#fef9ef",
        gunmetal: "#2d3142ff",
      },
    },
  },
  plugins: [],
};
