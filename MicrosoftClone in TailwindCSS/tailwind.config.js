/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      borderWidth: {
        1: "0.1px",
      },
      spacing: {
        0.1: "0.1px",
        105: "410px",
        110: "445px",
        115: "540px",
        130: "575px",
        132: "655px",
        135: "715px",
        140: "795px",
        150: "830px",
        160: "975px",
        180: "1085px",
        200: "1500px",
        250: "2000px",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
