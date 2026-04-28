import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        surface: '#081121',
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(56, 189, 248, 0.2), 0 24px 80px rgba(14, 165, 233, 0.18)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top, rgba(34, 211, 238, 0.24), transparent 28%), radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.2), transparent 24%), radial-gradient(circle at 50% 100%, rgba(168, 85, 247, 0.12), transparent 30%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
