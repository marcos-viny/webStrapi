/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      boxShadow:{
        shadowContainer:'0 5px 45px #000000'
      }
    },
  },
  plugins: [],
}
