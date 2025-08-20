/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.08)",
      },
      colors: {
        brand: {
          50: "#f2fbff",
          100: "#e6f7ff",
          200: "#bfeaff",
          300: "#99ddff",
          400: "#33c2ff",
          500: "#00a8ff",
          600: "#0086cc",
          700: "#006399",
          800: "#004066",
          900: "#001e33"
        }
      }
    },
  },
  plugins: [],
};