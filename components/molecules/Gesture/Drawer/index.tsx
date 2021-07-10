import React from 'react'
import styled, { css } from 'styled-components'

const Overlay = styled.div<{ open: boolean }>`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.5s;
  ${(props) =>
    props.open &&
    css`
      opacity: 1;
    `}
`

const ModalContainer = styled.div<IProps>`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 0 15px 15px 0; // variant
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translateX(-100%);
  transition: all 0.5s;
  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`

interface IProps {
  open: boolean
  onClose: () => void
  children?: React.ReactNode
  anchor?: 'left' | 'right'
  variant?: 'square' | 'rounded'
}

export const Drawer: React.FC<IProps> = (props) => {
  const { open, onClose, children } = props

  return (
    <>
      <Overlay open={open} onClick={onClose} />
      <ModalContainer {...props}>{children}</ModalContainer>
    </>
  )
}
