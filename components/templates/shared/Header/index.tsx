import React from 'react'
import dynamic from 'next/dynamic'
import { NavigationList } from './NavigationList'
import { Flex } from 'components/atoms/Layout'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { css } from 'styled-components'

const DynamicMobileHeader = dynamic(() =>
  import('components/templates/shared/Header/MobileHeader').then(
    (component) => component.MobileHeader
  )
)

const flexStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.color.surface};
  z-index: 3;
`

export const Header: React.FC = () => {
  const width = useMediaQuery()

  return (
    <Flex height="75px" shadow justify="center" css={flexStyle}>
      {width <= 768 ? <DynamicMobileHeader /> : <NavigationList />}
    </Flex>
  )
}
