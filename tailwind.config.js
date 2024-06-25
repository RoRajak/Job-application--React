/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'general-sans': ['General Sans', 'sans-serif'],
      },
      boxShadow: {
        'bottom-orange': '0 4px 6px -1px rgba(255, 165, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

