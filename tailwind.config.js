/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#0f172a',
          900: '#0a0f1c',
        },
        zinc: {
          800: '#27272a',
          900: '#18181b',
        },
        slate: {
          800: '#1e293b',
          900: '#0f172a',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
        }
      },
      borderRadius: { "2xl": "1rem" },
      boxShadow: { card: "0 6px 30px rgba(2,6,23,0.12)" }
    }
  },
  plugins: []
};
