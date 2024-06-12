/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      backgroundColor: {
        "custom-hover": "#f0f9ff",
        "custom-text": "#009ACC",
      },
      textColor: {
        "custom-text": "#009ACC",
        "custom-hover": "#f0f9ff",
        para: "#52525b",
      },
    },
  },
  plugins: [],
};
