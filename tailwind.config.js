/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: { ...colors },
    extend: {
      fontSize: {
        gallery: [
          '9px',
          {
            letterSpacing: '9.5px',
          },
        ],
      },
      colors: {
        success: { dark: '#006e00', DEFAULT: '#3CC13B', light: '#c8ecc6' },
        warning: { dark: '#ee7800', DEFAULT: '#F3BB1C', light: '#faf198' },
        error: { dark: '#c2151d', DEFAULT: '#F03738', light: '#ffced4' },
        transparent: 'transparent',
        primary: { dark: '#B25100', DEFAULT: '#ED6C00', light: '#F6B680' },
        secondary: '#ecc94b',
        black: '#303540',
        grey: {
          1: '#616569',
          2: '#92979D',
          3: '#C2C9D1',
          4: '#E1E4E8',
          5: '#F0F2F3',
          6: '#F9FAFA',
          7: '#FCFCFD',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
