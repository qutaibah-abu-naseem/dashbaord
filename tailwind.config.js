/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // أو حسب بنية مشروعك
  ],
  theme: {
    extend: {
      screens: {
        'xs': '440px',
      },
    },
  },
  plugins: [],
}
