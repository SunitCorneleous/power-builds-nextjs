/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#53289e',
      },
      /*  fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Define your custom font family
      }, */
    },
  },
  plugins: [],
};
