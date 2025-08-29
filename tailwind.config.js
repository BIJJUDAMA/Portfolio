/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'retro-dark': '#0f172a',
        'retro-light': '#e2e8f0',
        'retro-accent': '#38bdf8',
      }
    },
  },
  plugins: [],
}
