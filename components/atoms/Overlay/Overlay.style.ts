import styled from 'styled-components'

const Overlay = styled.div`
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

export const Styled = {
  Overlay
}
