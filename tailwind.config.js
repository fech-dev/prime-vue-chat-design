/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff8e72ff',
          500: '#ff8e72ff',
        },
        secondary: {
          DEFAULT: '#4ce0b3ff',
          500: '#4ce0b3ff',
        },
        base: {
          DEFAULT: '#377771ff',
        },
      },
    },
  },
  plugins: [],
};

/**
 * --atomic-tangerine: #ffaf87ff;
--salmon: #ff8e72ff;
--bittersweet: #ed6a5eff;
--aquamarine: #4ce0b3ff;
--myrtle-green: #377771ff;
 */
