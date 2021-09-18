import React from 'react'
import styled from 'styled-components'
import { NavigationList } from 'components/templates/Header/NavigationList'
import { ThemeToggler } from 'components/molecules/ThemeToggler'
import { IHeaderProps } from 'types/schema/Navigation'

export const DesktopHeader: React.FC<IHeaderProps> = (props) => {
  return (
    <>
      <NavigationList {...props} />
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
