import React from 'react'
import { css } from 'styled-components'
import { Link } from 'components/atoms/Link'
import { IHeaderProps } from 'types/schema/Navigation'

export const NavigationList: React.FC<IHeaderProps> = (props) => {
  const navList = props.navigation.map((elem) => {
    const { id, pathname, title } = elem
    return (
      <Link
        key={id}
        variant="navigation"
        href={`/${pathname === 'home' ? '' : pathname}`}
        css={navigationStyle}
      >
        {title}
      </Link>
    )
  })

  return <>{navList}</>
}

const navigationStyle = css`
  margin: 0 ${({ theme }) => theme.space.s};

  ${(props) => props.theme.media.tablet} {
    margin: 30px 0 0 30px;
    display: block;
  }
`
