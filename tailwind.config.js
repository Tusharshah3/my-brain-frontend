/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        font1: 'Manrope', //for headers, body, etc
        font2: 'quintessential' //for design bits
      },
      colors: {
        primary: {
          1: "#003049",
          2: "#003049"
        },
        secondary: {
          1: "#003049",
          2 : "#003049"
        },
        cardColor: {
          1: '#d4e09b',
          2: '#d62828',
          3: '#d62828'
        },
        border: "#2d6a4f",
        logout:{
          1: 'rgb(100 20 28)',
          2: "rgb(150 28 8)"
        },
        text: "#FFFFFF",
        darkBackground: "#d62828"
    },
  },
  plugins: [],
  }
}