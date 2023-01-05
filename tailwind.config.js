/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main": "#61c0bf",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      borderColor: {
        "main": "#61c0bf",
      },
      borderWidth: {
        "1": "1px",
      }
    },
  },
  plugins: [],
};
