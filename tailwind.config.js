/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
        blue:'#3584C7',
        gray:'#848383',
        lightblue:'#86BEDA'
      }
    },
  },
  plugins: [],
}

