/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' if you prefer auto-based on system settings
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-out forwards',
        slideUp: 'slideUp 1s ease-out forwards',
        pulse: 'pulse 1s infinite',
        fadeIn: "fadeIn 1.5s ease-in-out", // Adjusted for merge
        slideDown: "slideDown 1.5s ease-in-out",
        fadeUp: "fadeUp 1.5s ease-in-out",
        zoomIn: "zoomIn 7s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      colors: {
        indigo: {
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },
        purple: {
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
        },
        pink: {
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
        },
        'dark-bg': '#1a202c',
        'dark-text': '#edf2f7',
        'gray-900': '#111827',
        'gray-800': '#1f2937',
        'custom-dark': '#1c1c1c',  // A custom dark color
        'custom-light': '#f8f8f8',
        'gray-700': '#374151',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      boxShadow: ['dark'],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};
