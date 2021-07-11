import React from 'react'
import styled from 'styled-components'
import { IProps } from 'components/atoms/Overlay/type'

const StyledOverlay = styled.div<{ open: boolean }>`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn ${({ theme }) => theme.animation.duration.normal} ease;

  ${(props) => props.theme.animation.keyframes.fadeIn}
`

export const Overlay: React.FC<IProps> = (props) => {
  const { open, onClose } = props

  return <StyledOverlay open={open} onClick={onClose} />
}
