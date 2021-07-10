import React from 'react'
import { style } from 'components/molecules/Gesture/HamburgerMenu/style'
import { IProps } from 'components/molecules/Gesture/HamburgerMenu/type'
import styled from 'styled-components'

const StyledHamburgerMenu = styled.div<IProps>`
  ${(props) => style[props.variant]}
`

export const HamburgerMenu: React.FC<IProps> = (props) => {
  const { toggleShow } = props
  return (
    <StyledHamburgerMenu onClick={toggleShow} {...props}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburgerMenu>
  )
}

HamburgerMenu.defaultProps = {
  variant: 'styleOne'
}
