/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lalezar: ["Lalezar", "ui-sans-serif"],
    },
    container: {
      screens: {
        xl: "1024px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
