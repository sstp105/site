import { InnerHTML } from 'components/atoms/InnerHTML'
import React from 'react'
import styled from 'styled-components'
import { markdown_style } from 'styles/modules/markdown'

interface IArticle {
  article: string
}

export const Article: React.FC<IArticle> = (props) => {
  const { article } = props

  return (
    <StyledArticle>
      <InnerHTML html={article} />
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  padding-left: 20px;
  padding-right: 20px;
  ${markdown_style}
`
