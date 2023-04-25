/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./renderer/**/*.{vue,js,ts,jsx,tsx}",
      "./pages/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      fontFamily: {
        sans: ['Krona One', 'sans-serif'],
        serif: ['Source Serif Pro', 'serif'],
        mono: ['PT Mono', 'monospace'],
      }
    },
    plugins: [],
  }


