import React from 'react'
import { Styled } from 'components/molecules/HamburgerMenu/HamburgerMenu.style'
import {
  IProps,
  IDefaultProps,
  PropsToOmit
} from 'components/molecules/HamburgerMenu/HamburgerMenu.type'

export const HamburgerMenu: React.FC<IProps> = (props) => {
  const { testId, active, onClick } = props
  return (
    <Styled.HamburgerMenu
      data-testid={testId}
      active={active}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Styled.HamburgerMenu>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  active: false
}

HamburgerMenu.defaultProps = defaultProps
