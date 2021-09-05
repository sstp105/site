import React from 'react'
import styled from 'styled-components'
import { markdown_style } from 'styles/modules/markdown'

const StyledArticle = styled.article`
  padding-left: 20px;
  padding-right: 20px;
  ${markdown_style}
`

interface IArticle {
  article: string
}

export const Article: React.FC<IArticle> = (props) => {
  const { article } = props

  return (
    <StyledArticle>
      <div dangerouslySetInnerHTML={{ __html: `${article}` }} />
    </StyledArticle>
  )
}
