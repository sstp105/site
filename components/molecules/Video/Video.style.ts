import styled, { css } from 'styled-components'

const Container = styled.div`
  position: relative;
  transition: all ${({ theme }) => theme.animation.duration.slow};
`

const Poster = styled.div<{ active: boolean }>`
  position: relative;
  z-index: 1;
  opacity: 1;

  & > i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${(props) =>
    !props.active &&
    css`
      z-index: 0;
      opacity: 0;
    `}
`

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; // 填充整个容器
  height: 100%;
`

export const Styled = {
  Container,
  Poster,
  Video
}
