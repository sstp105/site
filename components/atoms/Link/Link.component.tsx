import React from 'react'
import { default as NextLink } from 'next/link'
import { Styled } from 'components/atoms/Link/Link.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/atoms/Link/Link.type'

export const Link: React.FC<IProps> = (props) => {
  const { href, children, testId, ...themeProps } = props

  return (
    <NextLink href={href} passHref>
      <Styled.Link data-testid={testId} {...themeProps}>
        {children}
      </Styled.Link>
    </NextLink>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  variant: 'default'
}

Link.defaultProps = defaultProps
