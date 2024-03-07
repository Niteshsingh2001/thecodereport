/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        English_Town: "English Town",
        Chomsky: "Chomsky"
      }
    },
  },
  plugins: [],
}