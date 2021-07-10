import styled from 'styled-components'
import { IProps } from 'components/atoms/Link/types'
import { style } from 'components/atoms/Link/style'
import { default as NextLink } from 'next/link'

const StyledLink = styled.a<IProps>`
  text-decoration: none;
  color: ${(props) => props.theme.colors.typography};
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

Link.defaultProps = {
  variant: 'default'
}
