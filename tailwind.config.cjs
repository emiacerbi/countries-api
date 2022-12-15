/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neutral-100': 'hsl(0, 0%, 98%)',
        'neutral-500': 'hsl(0, 0%, 52%)',
        'neutral-700': 'hsl(209, 23%, 22%)',
        'neutral-800': 'hsl(207, 26%, 17%)',
        'neutral-900': 'hsl(200, 15%, 8%)'
      },
      fontFamily: {
        primary: "'Nunito Sans', sans-serif"
      }

    }
  },
  plugins: [],
  darkMode: 'class'
}
