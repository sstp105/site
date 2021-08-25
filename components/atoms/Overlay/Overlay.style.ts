import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/atoms/Overlay/Overlay.type'

const Overlay = styled.div<Partial<IThemeProps>>`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn ${({ theme }) => theme.animation.duration.normal} ease;

  ${(props) => props.theme.animation.keyframes.fadeIn}

  ${(props) =>
    props.fullSize &&
    css`
      position: fixed;
    `}
`

export const Styled = {
  Overlay
}
