/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ef',
          100: '#e8e3d9',
          200: '#d4cbb8',
          300: '#b8a88f',
          400: '#a08b6e',
          500: '#8b7355',
          600: '#7a6348',
          700: '#66513c',
          800: '#564435',
          900: '#4a3a2f',
        },
        secondary: {
          50: '#f0f7f4',
          100: '#dceee5',
          200: '#bbddcd',
          300: '#8cc5ad',
          400: '#5da68a',
          500: '#3c8b6e',
          600: '#2d6f56',
          700: '#265946',
          800: '#22483b',
          900: '#1d3c32',
        },
        accent: {
          50: '#fef9f0',
          100: '#fdf0db',
          200: '#fae0b6',
          300: '#f6c985',
          400: '#f1aa4e',
          500: '#ed9129',
          600: '#de761f',
          700: '#b85b1b',
          800: '#93481d',
          900: '#773c1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}