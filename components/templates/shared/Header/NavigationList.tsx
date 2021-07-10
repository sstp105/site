import React from 'react'
import { css } from 'styled-components'
import { Link } from 'components/atoms/Link'
import navigationData from 'data/navigation.json'

const Desktop = css`
  margin: 0 20px;
`

const Mobile = css`
  margin: 30px 0 0 30px;
  display: block;
`

export const NavList: React.FC<{ mobile: boolean }> = (props) => {
  const navList = navigationData.map((elem) => (
    <Link
      variant="navigation"
      href={elem.href}
      css={props.mobile ? Mobile : Desktop}
    >
      {elem.label}
    </Link>
  ))

  return <>{navList}</>
}
