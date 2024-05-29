/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "16px",
          md: "32px",
          lg: "64px",
          xl: "86px",
        },
      },

      screens: {
        lg: "1280px",
        xl: "1440px"
      },

      colors: {
        "primary": "#3A9F1F",
        "secondary": "#2B3D40"
      }
    },
  },
  plugins: [],
}