import React from 'react'
import { css } from 'styled-components'
import { Link } from 'components/atoms/Link'
import navigationData from 'data/navigation.json'

const navigationStyle = css`
  margin: 0 20px;

  ${(props) => props.theme.media.tablet} {
    margin: 30px 0 0 30px;
    display: block;
  }
`

export const NavigationList: React.FC = () => {
  const navList = navigationData.map((elem) => (
    <Link
      key={elem.href}
      variant="navigation"
      href={elem.href}
      css={navigationStyle}
    >
      {elem.label}
    </Link>
  ))

  return <>{navList}</>
}
