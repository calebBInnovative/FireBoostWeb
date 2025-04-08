/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#0A0A1F",
          surface: "#1C2E4A",
          primary: "#FF5500",
          glow: "#FFA726",
          textBase: "#F5F5F5",
        },
        fontFamily: {
          sans: ["'Rubik'", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  