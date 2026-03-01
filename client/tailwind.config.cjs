/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7dd3fc',
          DEFAULT: '#0ea5e9',
          dark: '#0369a1'
        },
        accent: '#8b5cf6'
      }
    }
  },
  plugins: []
};
