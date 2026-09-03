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
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}