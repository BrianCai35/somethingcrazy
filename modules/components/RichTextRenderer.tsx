import { RichText } from '@graphcms/rich-text-react-renderer'

// types
import { RichTextContent } from '@graphcms/rich-text-types'

// components
import Paragraph from './Paragraph'

interface Props {
  content: RichTextContent
}

export default function RichTextRenderer (props: Props): JSX.Element {
  return (
    <RichText
      content={props.content}
      renderers={{
        p: ({ children }) => (
          <Paragraph>{children}</Paragraph>
        )
      }}
    />
  )
}
