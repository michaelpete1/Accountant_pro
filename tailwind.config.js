/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2c7a7b',   // teal-700
          hover:   '#285e61',   // a bit darker for hover
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body:    ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
