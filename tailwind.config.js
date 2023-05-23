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
        "primary-black": "#231F20",
        "secondary-green": "#00A99D",
        "accent-pink": "#D51880",
        "accent-gray": "#AEAEAE",
      },
    },
  },
  plugins: [],
};
