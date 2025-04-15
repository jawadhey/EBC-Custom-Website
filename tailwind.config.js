
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        xxl: "1700px",
      },

      colors: {
        TwPrimaryPurple: '#7436EA',
        TwPrimaryPurpleBgHover: '#5d2fb3',

        TwOrangeBg: '#ffcd767c',
        TwOrangeBgHover: '#ffc15552',
        
        TwPurpleBg: '#5d2fb3',
        TwPurpleBgHover: '#D9C4FF',
      },

      animation: {
        'spin-slow': "spin 3s linear infinite",
      },

      boxShadow: {
        TwBoxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.08)',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        // mareka: ['Mareka', 'sans-serif'],
      },

      fontWeight: {
        thin: "100",
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },


    },
  },
  plugins: [],
};
