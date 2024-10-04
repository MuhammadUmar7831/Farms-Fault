/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DACDBB",
        secondary: "#E7DBCA",
        tertiary: "#181C1E",
      },
    },
  },
  plugins: [],
};
