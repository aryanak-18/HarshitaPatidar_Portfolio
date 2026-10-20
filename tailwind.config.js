// Theme colours come from CSS variables (see index.css) so `.dark` can swap them.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: v('paper'),
        surface: v('surface'),
        ink: v('ink'),
        body: v('body'),
        muted: v('muted'),
        line: { DEFAULT: v('line'), strong: v('line-strong') },
        navy: { DEFAULT: '#0E1A2B', soft: '#16263D' },
        accent: {
          DEFAULT: v('accent'),
          dark: v('accent-dark'),
          soft: v('accent-soft'),
          wash: v('accent-wash'),
          light: '#7DD3AE',
        },
        pop: {
          green: '#12B76A',
          teal: '#0EA5A4',
          lime: '#B5E655',
          amber: '#F5A524',
          violet: '#7C5CFF',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', '"Times New Roman"', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'none' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(70px, -50px) scale(1.12)' },
          '66%': { transform: 'translate(-50px, 40px) scale(.94)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(18px, -22px) rotate(90deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .45s cubic-bezier(.2,.8,.2,1) both',
        blob: 'blob 22s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 45s linear infinite',
        'gradient-pan': 'gradient-pan 6s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
