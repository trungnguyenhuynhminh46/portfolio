/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Space Mono", "monospace"],
        secondary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
