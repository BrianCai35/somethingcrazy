import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        'tilted-pinball': '#F45327',
        azulado: '#261F4B',
        ivory: '#F4E9D7',
        charcoal: '#1D1D1D',
        'forest-olive': '#738315',
        'ias-yellow': '#FAB301',
        'ias-red': '#DF001B',
        'ias-blue': '#2D8FCE'
      },
      fontFamily: {
        pilowlava: ['var(--font-pilowlava)'],
        strasua: ['var(--font-strasua)'],
        'kumbh-sans': ['var(--font-kumbh-sans)']
      }
    }
  },
  plugins: []
}
export default config
