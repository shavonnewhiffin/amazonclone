module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        test: "red",
        primary: "#131921",
        background: "#EAEDED",
        lightBlue: "#232F3A",
        yellow: "#FEBD69",
      },
      screens: {
        xs: "480px",
      },
    },
  },
};