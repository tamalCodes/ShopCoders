/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        orange: "#FF8400",
        black: "#000000",
      },
    },
    screens: {
      md: "1200px",
      max_md: { max: "1199px" },
      max_th: { max: "1000px" },
      tab: "800px",
      max_tab: { max: "799px" },
      mobile: "500px",
      max_mobile: { max: "499px" },
    },
  },
  plugins: [],
};
