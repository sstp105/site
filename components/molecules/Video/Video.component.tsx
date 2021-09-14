import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from 'components/atoms/Icon'
import { Image } from 'components/atoms/Image'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import { IImage } from 'types/shared/Image'

const StyledVideoContainer = styled.div`
  position: relative;
  transition: all ${({ theme }) => theme.animation.duration.slow};
`

const StyledPreview = styled.div<{ active: boolean }>`
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

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; // 填充整个容器
`

export interface IVideoProps {
  showBanner: boolean
  onPlay: () => void
  banner: IImage
  src: string
}

export const Video = React.forwardRef<HTMLVideoElement, IVideoProps>(
  (props, ref) => {
    const { showBanner, onPlay, banner, src } = props

    return (
      <StyledVideoContainer>
        <StyledPreview active={showBanner}>
          <Image src={banner.url} alt={banner.alt} variant="square" />
          <Icon iconName={FONTAWESOME_ICONS.play} size="xxl" onClick={onPlay} />
        </StyledPreview>
        <StyledVideo src={src} ref={ref} />
      </StyledVideoContainer>
    )
  }
)
