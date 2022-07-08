const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        ...colors.black,
        primary: '#2C2C34',
      },
      blue: {
        ...colors.blue,
        primary: '#7189FF',
        dark: '#3A405A',
      },
      brown: {
        primary: '#C1B4AE',
      },
      red: {
        ...colors.red,
        primary: '#BC4B51',
      },
      white: {
        ...colors.white,
        primary: '#EBEBEB',
      },
    },
    extend: {},
  },
  plugins: [],
}
