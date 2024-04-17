import { kumbhSans } from 'fonts'
import { PropsWithChildren } from 'react'

interface CpProps {
  theme: 'dark' | 'light'
}

export default function H1 (props: PropsWithChildren<CpProps>): JSX.Element {
  const { theme, children } = props

  return <h1 className={`font-bold text-4xl md:text-[40px] ${kumbhSans} ${theme === 'dark' ? 'text-ivory' : 'text-azulado'}`}>{children}</h1>
}
