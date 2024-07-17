/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'testudo-dark': '#141414',
        'testudo-purple': '#8A69A4',
      },
    },
  },
  plugins: [],
}