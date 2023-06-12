/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
      },
      colors: {
        "project-black": "#231F20",
        "project-green": "#00A99D",
        "project-pink": "#D51880",
        "project-dark-gray": "#3D3738",
        "project-gray": "#AEAEAE",
        "project-dark-black": "#0F0F0F",
      },
      keyframes: {
        slideOut: {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(25%)",
            opacity: "0",
          },
        },

        slideIn: {
          "0%": {
            transform: "translateX(25%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
    fontSize: {
      xs: "0.625rem",
      sm: "0.75rem",
      base: "0.85rem",
      xl: "1rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "1.75rem",
      "5xl": "2rem",
      "6xl": "2.5rem",
      "7xl": "3rem",
    },
  },
  plugins: [],
};
