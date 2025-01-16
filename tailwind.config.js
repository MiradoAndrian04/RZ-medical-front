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
        lightblue:'#86BEDA',
        lightgray:'#9ca3af',
        darkgray:'#111827',
        gray50:'#f9fafb',
        gray100:'#f3f4f6',
        gray600:'#4b5563',
        gray800:'#1f2937'
      }
    },
  },
  plugins: [],
}

