/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      // userDrag: {
      //   none: 'user-drag: none; -webkit-user-drag: none;',
      // },
      // userSelect: {
      //   none: 'user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;',
      // },
    },
  },
  plugins: [],
}

