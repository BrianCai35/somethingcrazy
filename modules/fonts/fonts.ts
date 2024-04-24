import localFont from 'next/font/local'
import { Kumbh_Sans } from 'next/font/google'

const pilowlavaFont = localFont({
  src: [
    {
      path: '../../public/fonts/Pilowlava-Regular.otf'
    }
  ],
  variable: '--font-pilowlava',
  display: 'swap'
})

const strasuaFont = localFont({
  src: [
    {
      path: '../../public/fonts/strasua.otf'
    }
  ],
  variable: '--font-strasua',
  display: 'swap'
})

const kumbhSansFont = Kumbh_Sans({
  subsets: ['latin'],
  variable: '--font-kumbh-sans',
  display: 'swap'
})

export const kumbhSans = kumbhSansFont.variable + ' font-kumbh-sans'
export const strasua = strasuaFont.variable + ' font-strasua'
export const pilowlava = pilowlavaFont.variable + ' font-pilowlava'
