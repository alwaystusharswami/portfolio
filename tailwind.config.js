/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fill: {
          '0%': { width:'0%' },
          '25%': { width:'25%' },
          '50%': { width:'50%' },


        }
      },
      animation:{
        'filling': 'fill 3s linear'
      }
    },
  },
  plugins: [],
}