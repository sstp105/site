import React from 'react'
import styled from 'styled-components'
import { default as NextLink } from 'next/link'
import {
  IThemeProps,
  IDefaultProps,
  IProps
} from 'components/atoms/Link/Link.type'
import { style } from 'components/atoms/Link/Link.style'

const StyledLink = styled.a<Partial<IThemeProps>>`
  text-decoration: none;
  color: ${(props) => props.theme.color.link};
  cursor: pointer;

  ${(props) => style.variant[props.variant]}
`

export const Link: React.FC<IProps> = (props) => {
  const { href, children, ...themeProps } = props

  return (
    <NextLink href={href} passHref>
      <StyledLink {...themeProps}>{children}</StyledLink>
    </NextLink>
  )
}

const defaultProps: IDefaultProps = {
  variant: 'default'
}

Link.defaultProps = defaultProps
