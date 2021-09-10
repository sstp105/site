import React from 'react'
import styled from 'styled-components'
import { Overlay } from 'components/atoms/Overlay'
import { IImage } from 'types/shared/Image'

const BannerContainer = styled.div<{ image: IImage }>`
  position: relative;
  background-image: url('https://wallpaper.dog/large/17057841.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  margin-top: 75px;
  margin-bottom: 50px;
  width: 100%;
  height: 350px;
`

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h3,
  p {
    color: #fff !important;
  }
`
export interface IBannerProps {
  image: IImage
  element: React.ReactNode
  childrens?: React.ReactNode
}

export const Banner: React.FC<IBannerProps> = (props) => {
  const { element, childrens, image } = props

  return (
    <BannerContainer image={image}>
      <Overlay
        fullSize={false}
        css={`
          z-index: 0;
          background-color: rgba(0, 0, 0, 0.5);
        `}
      />
      <ContentWrapper>{element}</ContentWrapper>
      {childrens}
    </BannerContainer>
  )
}
