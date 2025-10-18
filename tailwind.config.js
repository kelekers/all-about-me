/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f0f1a",
        purpleAccent: "#7e3ff2",
      },
    },
  },
  plugins: [],
}