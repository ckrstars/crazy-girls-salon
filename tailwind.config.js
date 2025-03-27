/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        gold: '#C6A97C',
        navy: '#1B2B44',
        beige: {
          light: '#F5F1EA',
          DEFAULT: '#E5DDD3',
          dark: '#D5CEC4',
        },
      },
    },
  },
  plugins: [],
};