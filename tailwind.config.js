/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'florida-blue': '#0066CC',
        'florida-green': '#00A651',
        'florida-orange': '#FF6600',
        'health-blue': '#1E40AF',
        'health-green': '#059669',
      }
    },
  },
  plugins: [],
} 