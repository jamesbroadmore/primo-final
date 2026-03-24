/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'pp-dark': '#08090E',
        'pp-navy': '#0F1420',
        'pp-stone': '#1A1F30',
        'pp-gold': '#C9A44A',
        'pp-gold-light': '#E8D4A0',
        'pp-cream': '#F8F4EE',
        'pp-blue': '#1A4A7A',
        'pp-text': '#F0EDE8',
        'pp-muted': 'rgba(240,237,232,0.65)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A44A, #E8D4A0, #C9A44A)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'wave': 'wave 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
