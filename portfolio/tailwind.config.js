export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 28px 100px rgba(255,255,255,0.08)',
      },
      colors: {
        surface: '#0a0a0a',
      },
    },
  },
  plugins: [],
}