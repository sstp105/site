import React from 'react'
import styled from 'styled-components'
import { NavigationList } from 'components/templates/Header/NavigationList'
import { ThemeToggler } from 'components/molecules/ThemeToggler'

export const DesktopHeader: React.FC = () => {
  return (
    <>
      <NavigationList />
      <ThemeTogglerContainer>
        <ThemeToggler />
      </ThemeTogglerContainer>
    </>
  )
}

const ThemeTogglerContainer = styled.div`
  position: fixed;
  right: 50px;
`
