import React from 'react'
import dynamic from 'next/dynamic'
import { NavigationList } from './NavigationList'
import { Flex } from 'layout/Flex'
import { useMediaQuery } from 'hooks/useMediaQuery'

const DynamicMobileHeader = dynamic(() =>
  import('components/templates/shared/Header/MobileHeader').then(
    (component) => component.MobileHeader
  )
)

export const Header: React.FC = () => {
  const width = useMediaQuery()

  return (
    <Flex height="75px" shadow justify="center">
      {width <= 768 ? <DynamicMobileHeader /> : <NavigationList />}
    </Flex>
  )
}
