import React from 'react'
import styled, { css } from 'styled-components'
import { FlexLayout } from 'layout/SectionLayout'
import navigationData from 'data/navigation.json'
import { HamburgerMenu } from 'components/molecules/Gesture/HamburgerMenu'
import { MobileMenuModal } from 'components/organisms/Drawer'
import { useToggle } from 'hooks/useToggle'
import { Typography } from 'components/atoms/Typography'
import { NavList } from './NavigationList'

const StyledSectionLayout = styled(FlexLayout)`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 75px;
`

const DesktopHeader = styled.div`
  ${(props) => props.theme.media.s} {
    display: none;
  }
`

const MobileHeader = styled.div`
  display: none;
  ${(props) => props.theme.media.s} {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
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
        <MobileMenuModal show={show}>
          <NavList mobile={true} />
        </MobileMenuModal>
      </MobileHeader>
    </StyledSectionLayout>
  )
}
