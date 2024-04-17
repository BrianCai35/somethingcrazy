import { kumbhSans } from 'fonts'
import { PropsWithChildren } from 'react'

interface CpProps {
  theme: 'dark' | 'light'
}

export default function H3 (props: PropsWithChildren<CpProps>): JSX.Element {
  const { theme, children } = props

  return <h3 className={`font-bold text-xl md:text-2xl ${kumbhSans} ${theme === 'dark' ? 'text-ivory' : 'text-azulado'}`}>{children}</h3>
}
