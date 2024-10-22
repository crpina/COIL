/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'iphone12':390,
        'pc': '1024px', 
      }
      ,
      spacing:{
        'test': '726px',
      }
    },
  },
  plugins: [],
}