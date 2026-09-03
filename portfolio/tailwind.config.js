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
        'neon': '0 0 20px rgba(255,255,255,0.3)',
        'neon-lg': '0 0 40px rgba(255,255,255,0.2)',
      },
      colors: {
        surface: '#0a0a0a',
        neon: '#ffffff',
      },
      maxWidth: {
        '8xl': '1400px',
        '9xl': '1600px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255,255,255,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(255,255,255,0.6)' },
        },
        'green-pulse': {
          '0%, 100%': { boxShadow: '0 0 4px rgba(34,197,94,0.5)', opacity: 1 },
          '50%': { boxShadow: '0 0 14px rgba(34,197,94,0.9)', opacity: 1 },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'green-pulse': 'green-pulse 1.8s ease-in-out infinite',
        blink: 'blink 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}