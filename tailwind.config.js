/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        koho: ['KoHo', 'sans-serif'],
        krub: ['Krub', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
