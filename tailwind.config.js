
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
        TwPrimary: '#7436EA',
        TwBorder: '#DEDEDE',
      },

      animation: {
        'spin-slow': "spin 3s linear infinite",
      },

      boxShadow: {
        custom: '0px 0px 4px 0px rgba(13, 37, 123, 0.25)', // #0D257B40 is equivalent to rgba(13, 37, 123, 0.25)
        'custom-black': '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', // Add your custom shadow
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
