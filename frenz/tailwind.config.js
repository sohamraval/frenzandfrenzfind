/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xl: ['20px', '1'],
      lg: ['18px', '1'],
      sm: ['16px', '1'],
      xs: ['16px', '1'],
      '2xl': ['24px', '1.25']

    },
    fontFamily: {
      body: ["Satoshi-Regular", "sans-serif"],
      bodymed: ["Satoshi-Medium", 'sans-serif'],
      bodybold: ["Satoshi-Bold", 'sans-serif'],
      krona: ['Krona One', 'sans-serif'],
      lilita: ['Lilita One', 'sans-serif'],
    },
    extend: {
      colors: {
        black: "#232323",
        yellow: "#F9E865",
        blue: "#269DC6",
        darkBlue: "#1387AE",
        lightBlue: "#68D8FF",
        grey: "#E6E7E8"
      },
      
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      scale: ['hover', 'focus'],
    },
  },
  plugins: [
    addVariablesForColors
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
