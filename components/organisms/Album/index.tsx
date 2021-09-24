import React from 'react'
import styled from 'styled-components'
import { Image } from 'components/atoms/Image'
import { getImagePath } from 'libs/constants/images'
import { IImage } from 'types/shared/Image'
import { SizeBase } from 'types/design/Size'
import { Typography } from 'components/atoms/Typography'

export interface IAlbumProps {
  cover: IImage
  title: string
  artist: string
  size?: SizeBase
}

// TODO: refactor image constant with alt
export const Album: React.FC<IAlbumProps> = (props) => {
  const { size, cover, title, artist } = props

  return (
    <AlbumContainer size={size}>
      <Image
        src={getImagePath('albumFrame')}
        alt="Album cover"
        width="100%"
        height="100%"
        variant="square"
      />
      <AlbumBanner>
        <Image
          src={cover.url}
          alt={cover.alt}
          width="163px"
          height="163px"
          variant="square"
        />
      </AlbumBanner>
      <Typography variant="caption" margin={false}>
        {title} - {artist}
      </Typography>
    </AlbumContainer>
  )
}

Album.defaultProps = {
  size: 'm'
}

const style = {
  size: {
    s: 0.8,
    m: 1,
    l: 1.2
  }
}

const AlbumContainer = styled.div<{ size: SizeBase }>`
  position: relative;
  width: 200px;
  height: 200px;
  transform: ${(props) => `scale(${style.size[props.size]})`};
  transform-origin: top left;
`

const AlbumBanner = styled.div`
  position: absolute;
  top: 20px;
  left: 2px;
  img {
    border-radius: 5px;
  }
`
