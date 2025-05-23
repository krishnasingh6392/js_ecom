/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/index.html",
  ],
  theme: {
    extend: {
      height: {
        100: "400px",
      },
    },
  },
  plugins: [],
};
