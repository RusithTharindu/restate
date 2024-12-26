/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubic-Regular', 'sans-serif'],
        'rubik-bold': ['Rubic-Bold', 'sans-serif'],
        'rubik-medium': ['Rubic-Medium', 'sans-serif'],
        'rubik-light': ['Rubic-Light', 'sans-serif'],
        'rubik-extrabold': ['Rubic-ExtraBold', 'sans-serif'],
        'rubik-semibold': ['Rubic-SemiBold', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#0061FF0A',
          200: '#0061FF1A',
          300: '#0061FF',
        },
        accent: {
          100: '#FBFBFD',
        },
        black: {
          DEFAULT: '#000000',
          100: '#8C8E98',
          200: '#666876',
          300: '#191D31',
        },
        danger: '#F75555',
      },
    },
  },
  plugins: [],
};