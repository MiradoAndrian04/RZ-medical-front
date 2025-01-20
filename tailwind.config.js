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
        blue500:'#3b82f6',
        gray:'#848383',
        lightblue:'#86BEDA',
        lightgray:'#9ca3af',
        darkgray:'#111827',
        gray50:'#f9fafb',
        gray100:'#f3f4f6',
        gray300:'#d1d5db',
        gray600:'#4b5563',
        gray700:'#374151',
        gray800:'#1f2937'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ff7e5f, #feb47b)',
      },
    },
  },
  plugins: [],
}

