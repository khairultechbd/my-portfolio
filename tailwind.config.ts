import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg':        'var(--bg-primary)',
        'theme-card':      'var(--bg-card)',
        'theme-text':      'var(--text-primary)',
        'theme-muted':     'var(--text-muted)',
        'theme-secondary': 'var(--text-secondary)',
        'theme-border':    'var(--border-color)',
      },
    },
  },
  plugins: [],
}

export default config
