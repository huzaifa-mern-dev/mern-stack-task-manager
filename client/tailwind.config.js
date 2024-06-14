/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "first-text-color": "var(--text-color)",
        "secondary-text-color": "var(--second-text-color)",
      }
    },
  },
  plugins: [],
};
