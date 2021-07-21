import styled, { css } from 'styled-components'
import React from 'react'
import { styles } from 'components/atoms/Typography/Typography.style'
import {
  IThemeProps,
  IDefaultProps,
  IProps
} from 'components/atoms/Typography/Typography.types'

const TypographyComponent = styled.p<Partial<IThemeProps>>`
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
  ${(props) => styles.variant[props.variant]}
`

export const Typography: React.FC<IProps> = (props) => {
  const { children, ...themeProps } = props
  const { variant } = themeProps

  // non-HTML tag name convert to p element
  const HTMLElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const variantElement = HTMLElements.includes(variant) ? variant : 'p'

  return (
    <TypographyComponent as={variantElement} {...themeProps}>
      {children}
    </TypographyComponent>
  )
}

const defaultProps: Omit<IDefaultProps, 'color'> = {
  variant: 'body',
  display: 'block',
  align: 'inherit',
  margin: true,
  transform: 'none'
}

Typography.defaultProps = defaultProps
