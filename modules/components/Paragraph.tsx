import { kumbhSans } from 'fonts'
import { PropsWithChildren } from 'react'

interface CpProps {
  theme: 'dark' | 'light'
}

export default function Paragraph (props: PropsWithChildren<CpProps>): JSX.Element {
  const { theme, children } = props

  return <p className={`font-medium md:text-lg xl:text-xl ${kumbhSans} ${theme === 'dark' ? 'text-ivory' : 'text-azulado'}`}>{children}</p>
}
