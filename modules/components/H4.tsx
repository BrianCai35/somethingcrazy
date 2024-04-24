import { strasua } from 'fonts'
import { PropsWithChildren } from 'react'

interface CpProps {
  theme: 'dark' | 'light'
  styles?: string
}

export default function H4(props: PropsWithChildren<CpProps>): JSX.Element {
  const { theme, styles, children } = props

  return <h4 className={`text-4xl md:text-5xl xl:text-[50px] ${styles ?? ''} ${strasua} ${theme === 'dark' ? 'text-ivory' : 'text-azulado'}`}>{children}</h4>
}
