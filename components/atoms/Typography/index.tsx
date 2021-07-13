import styled, { css } from 'styled-components'
import React from 'react'
import { styles } from 'components/atoms/Typography/style'
import { IDefaultProps, IProps } from 'components/atoms/Typography/types'

const Component = styled.h1<IProps>`
  color: ${(props) =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.typography};
  text-align: ${(props) => props.align};
  display: ${(props) => props.display};
  text-transform: ${(props) => props.transform};

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

const defaultProps: Omit<IDefaultProps, 'color'> = {
  display: 'block',
  align: 'inherit',
  margin: true,
  transform: 'none'
}

Typography.defaultProps = defaultProps
