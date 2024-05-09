import { kumbhSans } from 'fonts'
import { PropsWithChildren } from 'react'

interface CpProps {
  theme?: 'dark' | 'light';
  weight?: 'medium' | 'normal';
  styles?: string
}

export default function Paragraph (props: PropsWithChildren<CpProps>): JSX.Element {
  const { theme = 'dark' , weight = 'medium' , styles, children } = props
  return <p className={`md:text-lg xl:text-xl ${kumbhSans} ${weight === 'medium' ? 'font-medium' : 'font-normal'}  ${theme === 'dark' ? 'text-charcoal' : 'text-ivory'} ${styles}`}>{children}</p>
}
