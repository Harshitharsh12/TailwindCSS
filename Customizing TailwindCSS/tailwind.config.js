/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontSize: {
        "10xl": ["9rem", { lineHeight: "1.2" }],
      },
      screens: {
        xsm: "500px",
      },
      borderWidth: {
        13: "13px",
      },
    },
  },
  plugins: [],
};
