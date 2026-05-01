/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0A0F1E',
          2: '#0D1526',
          3: '#111C35',
        },
        card: {
          DEFAULT: '#131E38',
          2: '#1A2744',
        },
        emerald: {
          sv: '#00D68F',
          dark: '#00B87A',
          glow: '#00F5A0',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'fade-up-delay': 'fadeUp 0.7s ease 0.2s both',
        'fade-up-delay2': 'fadeUp 0.7s ease 0.4s both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
