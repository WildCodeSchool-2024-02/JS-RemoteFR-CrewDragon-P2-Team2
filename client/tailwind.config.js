/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      libeige: "#FAF9F8",
      beige: "#F4F0E5",
      brown: "#CCC2A8",
      dabrown: "#282121",
      grey: "#8E8983",
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      cinzel: ["Cinzel", "serif"],
      logo: ["Cinzel Decorative", "serif"],
    },
    extend: {
      boxShadow: {
        area: "inset 13px 13px 26px #ccc2a8, inset -13px -13px 26px #faf9f8",
        crd: "7px 7px 14px #ccc2a8, -7px -7px 14px #faf9f8",
        btnshadow:
          "inset 7px 7px 14px #00000080, inset -7px -7px 14px #faf9f880",
      },
      borderRadius: {
        "4xl": "25px",
        "6xl": "50px",
      },
      width: {
        80: "80vw",
        90: "90vw",
      },
    },
  },
  plugins: [],
};
