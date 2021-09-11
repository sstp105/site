import React from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { Typography } from 'components/atoms/Typography'
import { HamburgerMenu } from 'components/molecules/HamburgerMenu'
import { NavigationList } from './NavigationList'
import { useToggle } from 'libs/hooks/useToggle'
import { HOME } from 'libs/constants/text'

const DynamicDrawer = dynamic(() =>
  import('components/molecules/Drawer').then((component) => component.Drawer)
)

export const MobileHeader: React.FC = () => {
  const [show, toggleShow] = useToggle(false)

  return (
    <StyledMobileHeader>
      <Typography variant="overline">{HOME.WELCOME}</Typography>
      <HamburgerMenu active={show} onClick={toggleShow} />
      <DynamicDrawer open={show} onClose={toggleShow}>
        <NavigationList />
      </DynamicDrawer>
    </StyledMobileHeader>
  )
}

export const StyledMobileHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`
