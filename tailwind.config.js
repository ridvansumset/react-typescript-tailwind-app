/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-web': '#FBFBFB',
      },
    },
  },
  plugins: [],
  // prefix: 'tw-',
  important: true,
  darkMode: 'class',
}
