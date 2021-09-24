import React, { useState, useRef, useEffect } from 'react'
import { Icon } from 'components/atoms/Icon'
import { Image } from 'components/atoms/Image'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import { IImage } from 'types/shared/Image'
import { Styled } from 'components/molecules/Video/Video.style'

export interface IVideoProps {
  banner: IImage
  src: string
}

export const Video: React.FC<IVideoProps> = (props) => {
  const { banner, src } = props

  const curVideoRef = useRef<HTMLVideoElement>(null)
  const [showBanner, setShowBanner] = useState<boolean>(true)

  useEffect(() => {
    setShowBanner(true)
  }, [src])

  const play = () => {
    if (!curVideoRef) return

    setShowBanner(false)
    curVideoRef.current.controls = true
    curVideoRef.current.play()
  }

  return (
    <Styled.Container>
      <Styled.Poster active={showBanner}>
        <Image src={banner.url} alt={banner.alt} variant="square" />
        <Icon iconName={FONTAWESOME_ICONS.play} size="xxl" onClick={play} />
      </Styled.Poster>
      <Styled.Video src={src} ref={curVideoRef} />
    </Styled.Container>
  )
}
