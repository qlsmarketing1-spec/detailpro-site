import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        violet: { DEFAULT: '#5e25fa', dark: '#280aa5' },
        midnight: '#050119',
        fog: '#e7e6ee',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        serif: ['Newsreader', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [typography],
}

export default config
