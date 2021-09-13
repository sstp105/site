import React from 'react'
import styled from 'styled-components'
import { Overlay } from 'components/atoms/Overlay'
import { IImage } from 'types/shared/Image'

export interface IBannerProps {
  image: IImage
  element: React.ReactNode
  childrens?: React.ReactNode
  testId?: string
}

export const Banner: React.FC<IBannerProps> = (props) => {
  const { element, childrens, image, testId } = props

  return (
    <BannerContainer image={image} data-testid={testId}>
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

const BannerContainer = styled.div<{ image: IImage }>`
  position: relative;
  /* background-image: url(${(props) => props.image.url}); */
  background-image: url('https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/video_banner.webp?alt=media&token=7cc5af65-9906-4784-8470-8c85a9ff634c');
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
