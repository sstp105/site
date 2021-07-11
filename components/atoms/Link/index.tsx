import React from 'react'
import styled from 'styled-components'
import { default as NextLink } from 'next/link'
import { IDefaultProps, IProps } from 'components/atoms/Link/type'
import { style } from 'components/atoms/Link/style'

const StyledLink = styled.a<IProps>`
  text-decoration: none;
  color: ${(props) => props.theme.colors.link};
  cursor: pointer;

  ${(props) => style[props.variant]}
`

export const Link: React.FC<IProps> = (props) => {
  const { href, children } = props

  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  )
}

const defaultProps: IDefaultProps = {
  variant: 'default'
}

Link.defaultProps = defaultProps
