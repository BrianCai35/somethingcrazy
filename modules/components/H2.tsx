import { kumbhSans } from 'fonts'
import { PropsWithChildren } from 'react'

interface CpProps {
  theme: 'dark' | 'light'
}

export default function H2 (props: PropsWithChildren<CpProps>): JSX.Element {
  const { theme, children } = props

  return <h2 className={`font-bold text-2xl md:text-[32px] ${kumbhSans} ${theme === 'dark' ? 'text-ivory' : 'text-azulado'}`}>{children}</h2>
}
