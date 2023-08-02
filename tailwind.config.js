/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#53289e",
        "primary-light": "#ede9fe",
      },
      /*  fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Define your custom font family
      }, */
    },
  },
  plugins: [],
};
