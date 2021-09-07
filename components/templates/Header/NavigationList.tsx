import React from 'react'
import { css } from 'styled-components'
import { Link } from 'components/atoms/Link'
import { navigation } from 'data/navigation'

const navigationStyle = css`
  margin: 0 20px;

  ${(props) => props.theme.media.tablet} {
    margin: 30px 0 0 30px;
    display: block;
  }
`

export const NavigationList: React.FC = () => {
  const navList = Object.keys(navigation).map((key) => {
    const navigationItem = navigation[key]
    const { _id, url, title } = navigationItem

    return (
      <Link key={_id} variant="navigation" href={url} css={navigationStyle}>
        {title}
      </Link>
    )
  })

  return <>{navList}</>
}
