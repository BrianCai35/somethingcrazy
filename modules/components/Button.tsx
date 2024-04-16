import { kumbhSans } from 'fonts'

interface CpProps {
  label: string
  theme: 'dark' | 'light'
  textColor?: string
}

export default function Button (props: CpProps): JSX.Element {
  const { label, theme, textColor = 'text-ivory' } = props
  const bg = theme === 'dark' ? 'bg-tilted-pinball' : 'bg-azulado'
  const font = 'font-bold text-lg md:text-xl'
  const states = `hover:border-2 focus:border-2 ${theme === 'light' ? 'hover:bg-[#352C67] focus:bg-[#352C67]' : ''}`
  const border = 'rounded-[100px] border-ivory'
  const padding = 'px-[30px] py-5'

  return <button className={`${padding} ${kumbhSans} ${border} ${font} ${textColor} ${bg} ${states}`}>{label}</button>
}
