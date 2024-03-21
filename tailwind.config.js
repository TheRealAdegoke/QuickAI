/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: { min: "320px", max: "766px" },
        tablet: { min: "767px", max: "1023px" },
        mobile: { max: "1023px" },
        PC: { min: "1024px" },
      }
    },
  },
  plugins: [],
};