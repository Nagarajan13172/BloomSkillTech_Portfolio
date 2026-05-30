/** @type {import('tailwindcss').Config} */
export default {
  // Dark variant keys off the same attribute our ThemeProvider toggles.
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Bridge a few design tokens so Tailwind utilities can reference the
      // hand-written Spectrum CSS variables when needed.
      colors: {
        bg: 'var(--bg)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
      },
      fontFamily: {
        display: 'var(--fd)',
        mono: 'var(--fm)',
      },
    },
  },
  // IMPORTANT: preflight is disabled so Tailwind's reset does not clobber the
  // existing global.css design system. We only use Tailwind's utilities.
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
