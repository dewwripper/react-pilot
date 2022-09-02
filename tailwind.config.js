/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    '.components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    letterSpaciong: {
      tight: '-.015em'
    },
    extend: {
      height: {
        'half-screen'
      }
    },
  },
  plugins: [],
}
