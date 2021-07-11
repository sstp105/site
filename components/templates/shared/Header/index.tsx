import React from 'react'
import styled from 'styled-components'
import { FlexLayout } from 'layout/SectionLayout'
import { HamburgerMenu } from 'components/molecules/Gesture/HamburgerMenu'
import { useToggle } from 'hooks/useToggle'
import { Typography } from 'components/atoms/Typography'
import { NavList } from './NavigationList'
import dynamic from 'next/dynamic'

const DynamicDrawer = dynamic(() =>
  import('components/molecules/Gesture/Drawer').then(
    (component) => component.Drawer
  )
)

const StyledSectionLayout = styled(FlexLayout)`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 75px;
`

const DesktopHeader = styled.div`
  ${(props) => props.theme.media.m} {
    display: none;
  }
`

const MobileHeader = styled.div`
  display: none;
  ${(props) => props.theme.media.m} {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    transition: all 0.5s;
  }
`

export const Header: React.FC = () => {
  const [show, toggleShow] = useToggle(false)

  return (
    <StyledSectionLayout>
      <DesktopHeader>
        <NavList mobile={false} />
      </DesktopHeader>
      <MobileHeader>
        <Typography variant="overline">Hey! This is Yang</Typography>
        <HamburgerMenu show={show} toggleShow={toggleShow} />

        <DynamicDrawer open={show} onClose={toggleShow}>
          <NavList mobile={true} />
        </DynamicDrawer>
      </MobileHeader>
    </StyledSectionLayout>
  )
}
