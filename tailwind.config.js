/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0ea5e9',    // Sky Blue (main brand)
          light: '#38bdf8',      // Sky Light
          dark: '#0284c7',       // Sky Dark
        },
        secondary: {
          DEFAULT: '#fbbf24',    // Amber (sunny)
          light: '#fcd34d',
          dark: '#f59e0b',
        },
        accent: {
          DEFAULT: '#fb923c',    // Orange Accent
          light: '#fdba74',
          dark: '#ea580c',
        },
        background: {
          light: '#f9fafb',      // light mode bg
          dark: '#1e293b',       // dark mode bg (blue-gray)
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      textColor: {
        DEFAULT: '#0ea5e9'
      }
    },
  },
  plugins: [],
}
