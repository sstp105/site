import React from 'react'
import { style } from 'components/molecules/HamburgerMenu/style'
import { IProps } from 'components/molecules/HamburgerMenu/type'
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
