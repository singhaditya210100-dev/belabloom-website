import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Enterprise blue palette
        primary: {
          50: '#f0f7ff',
          100: '#e0f0fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',        // Light blue - accessible
          600: '#0284c7',        // Mid blue
          700: '#0369a1',        // Deep blue
          800: '#075985',        // Darker
          900: '#1e3a5f',        // Navy - primary brand color
        },
        // Warm accent for CTAs and emphasis
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          400: '#fdba74',
          500: '#ff9500',        // Warm orange - CTA primary
          600: '#ea580c',
          700: '#c2410c',
        },
        // Success and validation
        success: {
          50: '#f0fdf4',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        // Neutral palette for text and subtle elements
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontSize: {
        // Modern typography scale
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        '3xl': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        '4xl': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        '5xl': ['48px', { lineHeight: '56px', fontWeight: '700' }],
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        // Enterprise shadow system
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'base': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'md': '0 4px 16px rgba(0, 0, 0, 0.10)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'xl': '0 12px 32px rgba(0, 0, 0, 0.15)',
        'hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'base': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
