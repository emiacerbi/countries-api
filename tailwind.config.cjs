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
      fontFamily: "'Nunito Sans', sans-serif"

    }
  },
  plugins: []
}

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
