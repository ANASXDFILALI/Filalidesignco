/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './index.tsx',
    './**/*.{tsx,ts}',
    '!./node_modules/**',
  ],
  theme: {
    extend: {
      colors: {
        'riad-red':        '#5c1a1a',
        'riad-brown':      '#3d2719',
        'riad-white':      '#f8f5f0',
        'riad-blue':       '#0a1f29',
        'riad-sand':       '#d4b596',
        'riad-gold':       '#C5A059',
        'riad-gold-leaf':  '#D4AF37',
        'riad-gold-light': '#E6C76C',
        'riad-gold-dark':  '#997B3D',
      },
      fontFamily: {
        arabic:  ['Amiri', 'serif'],
        royal:   ['Cinzel', 'serif'],
        elegant: ['Cormorant Garamond', 'serif'],
        classic: ['Marcellus', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5A059 0%, #F4E4A6 50%, #D4AF37 100%)',
        'gold-glow':     'radial-gradient(circle at center, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
        'patio-fade':    'linear-gradient(to top, #0a1f29 0%, transparent 100%)',
        'glass':         'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      boxShadow: {
        'deep':       '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
        'gold':       '0 0 30px rgba(212, 175, 55, 0.2)',
        'gold-hover': '0 0 40px rgba(212, 175, 55, 0.4)',
        'glass':      '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float':        'float 15s ease-in-out infinite',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow':  'spin 60s linear infinite',
        'subtle-zoom':  'subtle-zoom 30s ease-in-out infinite',
        'fade-up':      'fadeUp 1s ease-out forwards',
        'shimmer':      'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%':      { transform: 'translateY(-20px) scale(1.02)' },
        },
        'subtle-zoom': {
          '0%, 100%': { transform: 'scale(1.0)' },
          '50%':      { transform: 'scale(1.05)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
