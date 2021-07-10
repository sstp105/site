import React from 'react'
import styled, { css } from 'styled-components'

const ModalContainer = styled.div<{ show: boolean }>`
  z-index: 1;
  background-color: ${(props) => props.theme.colors.surface};
  width: 70%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: translateX(-100%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.5s;
  ${(props) =>
    props.show &&
    css`
      transform: translateX(0);
    `}
`

interface Props {
  show: boolean
}

export const MobileMenuModal: React.FC<Props> = (props) => {
  return <ModalContainer {...props}>{props.children}</ModalContainer>
}
