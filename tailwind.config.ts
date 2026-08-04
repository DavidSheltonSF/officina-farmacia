import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#0B241A',
          900: '#0F2E22',
          800: '#153B2C',
          700: '#1B4D3E',
          600: '#226349',
          500: '#2F8F5B',
          400: '#57AD79',
          300: '#8FD3B0',
          200: '#C3E9D5',
          100: '#E4F5EC',
        },
        sand: {
          50: '#FBFAF6',
          100: '#F7F5EF',
          200: '#F1EFE7',
          300: '#E7E3D6',
        },
        ink: {
          900: '#12190F',
          700: '#1F2A20',
          500: '#465248',
          300: '#7C8A7E',
        },
        gold: {
          500: '#B08A3E',
          400: '#C9A75B',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(15, 46, 34, 0.12)',
        card: '0 8px 30px -12px rgba(15, 46, 34, 0.18)',
        lift: '0 16px 48px -16px rgba(15, 46, 34, 0.28)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
