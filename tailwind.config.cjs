/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: 'Poppins'
    },
    extend: {
      colors: {
        ghostWhite: '#F8F8FF',
        grey: '#9F9FA0',
        blue: '#0369A1'
      },
      boxShadow: {
        heroShadow: '0px 0px 16px rgba(0, 0, 0, 0.15)'
      }
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px'
    }
  },
  plugins: [],
};
