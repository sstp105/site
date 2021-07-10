import styled, { css } from 'styled-components'
import React from 'react'
import { styles } from 'components/atoms/Typography/style'
import { IProps } from 'components/atoms/Typography/types'

const Component = styled.h1<IProps>`
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.typography};
  text-align: ${(props) => props.align};
  display: ${(props) => props.display};

  ${(props) =>
    props.margin &&
    css`
      margin: 20px 0;
    `}
  ${(props) => styles[props.variant]}
`

export const Typography: React.FC<IProps> = (props) => {
  const { variant, children } = props

  // non-HTML tag name convert to p element
  const nonHTMLElements = ['body', 'caption', 'overline']
  const variantElement = nonHTMLElements.includes(variant) ? 'p' : variant

  return (
    <Component as={variantElement} {...props}>
      {children}
    </Component>
  )
}

Typography.defaultProps = {
  align: 'inherit',
  display: 'block',
  margin: true
}
