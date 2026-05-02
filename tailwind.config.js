/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      colors: {
        bg: { DEFAULT: '#07090F', 2: '#0C0F1A', 3: '#101525' },
        card: { DEFAULT: '#0D1221', 2: '#111827' },
        blue: { sv: '#3B82F6', light: '#60A5FA', lighter: '#93C5FD' },
        indigo: { sv: '#6366F1' },
        violet: { sv: '#8B5CF6' },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'fade-up-delay': 'fadeUp 0.7s ease 0.25s both',
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
