/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      colors: {
        violet: {
          50: "#f0e7fa",
          100: "#e2d0f5",
          200: "#c4a0eb",
          300: "#a771e1",
          400: "#8941d7",
          500: "#6c12cd",
          600: "#560ea4",
          700: "#410b7b",
          800: "#2b0752",
          900: "#160429",
        },
        "slate-gray": "#6D6D6D",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        productsBg: "url('assets/images/productsBg.png')",
      },
    },
  },
  plugins: [],
};
