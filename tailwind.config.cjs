// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        specialGothic: ['"Special Gothic Expanded One"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"], // Add Roboto font
        poppins: ['"Poppins"', "sans-serif"], // Add Poppins font
      },
      animation: {
        "spin-slow": "spin 20s linear infinite", // Custom spin animation
      },
    },
  },
  plugins: [],
});
