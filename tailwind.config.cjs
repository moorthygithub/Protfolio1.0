const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        specialGothic: ['"Montserrat"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"], 
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
});
