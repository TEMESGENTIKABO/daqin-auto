/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: '#D4A017',
          dark: '#B58A12',
        },
        black: '#111111',
        gray: {
          dark: '#333333',
          light: '#F5F5F5'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'sans-serif'],
        chinese: ['Noto Sans SC', 'sans-serif'],
        cyrillic: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
