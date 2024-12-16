const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0, 0, 0, 0.04) 2px, #f5f5f5 100px)',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
   
    screens: {
        "2xl": "1400px",
        xl: {max: "1279px"},
        lg: {max: "1023px"},
        md: {max: "767px"},
        sm: {max: "639px"},
        xs: {max: "479px"},
      },
    },
    extend: {
        screens: {
          'custom-xs': { 'max': '480px' }, // up to 480px
          'custom-sm': { 'min': '481px', 'max': '639px' }, // 481px to 639px
          'custom-smx': {'min': '360px', 'max': '900px'}, // 360px to 749px
          'custom-xsm': { 'min': '640px', 'max': '999px'}, // 640px to 999px
          'custom-md': { 'min': '1000px', 'max': '1279px' }, // 700px to 1279px
        },

  },
  plugins: [],
};
