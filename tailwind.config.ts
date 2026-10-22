import type { Config } from 'tailwindcss';

export default <Config>{
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#FA2D48',
          600: '#e0243d',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          DEFAULT: '#FA2D48'
        },
        ios: {
          base: 'var(--ios-bg-base)',
          card: 'var(--ios-bg-card)',
          'card-secondary': 'var(--ios-bg-card-secondary)',
          blur: 'var(--ios-bg-blur)',
          sheet: 'var(--ios-bg-sheet)',
          separator: 'var(--ios-separator)',
          'text-primary': 'var(--ios-text-primary)',
          'text-secondary': 'var(--ios-text-secondary)',
          'text-tertiary': 'var(--ios-text-tertiary)'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'system-ui',
          'sans-serif'
        ]
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'nova-glow': '0 4px 20px rgba(250, 45, 72, 0.35)',
        'ios-card': '0 4px 16px rgba(0, 0, 0, 0.08)'
      },
      backdropBlur: {
        xs: '2px',
        md: '16px',
        lg: '24px',
        xl: '40px'
      },
      animation: {
        'pulse-subtle': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.25s ease-out'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { transform: 'scale(0.95)', opacity: '0.7' },
          '50%': { transform: 'scale(1.15)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};
