import React from 'react'
import styled, { css } from 'styled-components'
import { style } from 'components/molecules/Gesture/Drawer/style'
import { IDefaultProps, IProps } from 'components/molecules/Gesture/Drawer/type'
import { Overlay } from 'components/atoms/Overlay'

const StyledDrawer = styled.div<IProps>`
  z-index: 2;
  position: fixed;
  top: 0;
  width: 70%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.surface};
  transition: all ${(props) => props.theme.animation.duration.medium};

  ${(props) => props.theme.shadow.medium}
  ${(props) => style.anchor[props.anchor]}

  // The rounded corner depends on the anchor position
  ${(props) => style.variant[props.variant][props.anchor]} 

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`

export const Drawer: React.FC<IProps> = (props) => {
  const { open, onClose, children } = props

  return (
    <>
      <Overlay open={open} onClose={onClose} />
      <StyledDrawer {...props}>{children}</StyledDrawer>
    </>
  )
}

const defaultProps: IDefaultProps = {
  anchor: 'left',
  variant: 'round'
}

Drawer.defaultProps = defaultProps
