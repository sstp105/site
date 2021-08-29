import React from 'react'
import styled from 'styled-components'
import { Overlay } from 'components/atoms/Overlay'

const BannerContainer = styled.div`
  position: relative;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/TEST.jpg?alt=media&token=2f1724e2-0233-44bd-8773-f1fa4ea74a30');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-top: 75px;
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

export interface IProps {
  element: React.ReactNode
  childrens?: React.ReactNode
}

export const Banner: React.FC<IProps> = (props) => {
  const { element, childrens } = props

  return (
    <BannerContainer>
      <Overlay
        fullSize={false}
        css={`
          z-index: 0;
          background-color: rgba(0, 0, 0, 0);
        `}
      />
      <ContentWrapper>{element}</ContentWrapper>
      {childrens}
    </BannerContainer>
  )
}
