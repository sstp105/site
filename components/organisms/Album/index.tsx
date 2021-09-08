import React from 'react'
import styled from 'styled-components'
import { Image } from 'components/atoms/Image'
import { getImagePath } from 'libs/constants/images'
import { IImage } from 'types/shared/Image'

const AlbumContainer = styled.div<{ albumSize: number }>`
  position: relative;
  width: ${(props) => props.albumSize}px;
  height: ${(props) => props.albumSize}px;
  transform: scale(0.8);
  transform-origin: top left;
`

const AlbumBanner = styled.div<{ albumSize: number }>`
  position: absolute;
  top: 20px;
  left: 2px;
  img {
    border-radius: 5px;
  }
`

export interface IAlbumProps {
  albumSize?: number
  banner: IImage
}

export const Album: React.FC<IAlbumProps> = (props) => {
  const { albumSize, banner } = props

  return (
    <AlbumContainer albumSize={albumSize}>
      <Image
        src={getImagePath('albumFrame')}
        alt=""
        width="100%"
        height="100%"
        variant="square"
      />
      <AlbumBanner albumSize={albumSize}>
        <Image
          src={banner.url}
          alt={banner.alt}
          width={`${albumSize / 1.21}px`}
          height={`${albumSize / 1.21}px`}
          variant="square"
        />
      </AlbumBanner>
    </AlbumContainer>
  )
}

Album.defaultProps = {
  albumSize: 200
}
