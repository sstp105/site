import React from 'react'

export interface IInnerHTMLProps {
  html: string
}

export const InnerHTML: React.FC<IInnerHTMLProps> = (props) => {
  const { html } = props

  return <div dangerouslySetInnerHTML={{ __html: `${html}` }} />
}
