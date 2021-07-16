import React from 'react'
import dynamic from 'next/dynamic'
import { NavigationList } from './NavigationList'
import { Flex } from 'layout/Flex'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { css } from 'styled-components'

const DynamicMobileHeader = dynamic(() =>
  import('components/templates/shared/Header/MobileHeader').then(
    (component) => component.MobileHeader
  )
)

const demo = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 3;
`

export const Header: React.FC = () => {
  const width = useMediaQuery()

  return (
    <Flex height="75px" shadow justify="center" css={demo}>
      {width <= 768 ? <DynamicMobileHeader /> : <NavigationList />}
    </Flex>
  )
}
