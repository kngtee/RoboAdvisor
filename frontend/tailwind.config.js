/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#9b9e1f",
        bgColor: "#1b211f",
        textColor: "#e6e3d7",
      },
      boxShadow: {
        panelShadow: "rbga(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      }
    },
  },
  plugins: [],
}

