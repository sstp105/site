import React from 'react'
import styled from 'styled-components'
import { style } from 'components/molecules/Gesture/Drawer/style'
import { IDefaultProps, IProps } from 'components/molecules/Gesture/Drawer/type'
import { Overlay } from 'components/atoms/Overlay'

const StyledDrawer = styled.div<IProps>`
  z-index: 2;
  position: fixed;
  top: 0;
  width: 70%;
  height: 100%;
  background-color: ${(props) => props.theme.color.surface};

  ${(props) => props.theme.shadow.normal}

  ${(props) => style.anchor[props.anchor]}
  ${(props) => style.variant[props.variant][props.anchor]} 

  animation: slideIn ${({ theme }) => theme.animation.duration.slow} ease;
`

export const Drawer: React.FC<IProps> = (props) => {
  const { open, onClose, children } = props

  if (!open) return null
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
