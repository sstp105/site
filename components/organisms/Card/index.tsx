import styled, { css } from 'styled-components'
import { Image } from 'components/atoms/Image'
import React from 'react'

export interface IThemeProps {}

export interface IDefaultProps {}

interface IProps {
  cardBanner: {
    url: string
    alt: string
  }
  float: 'left' | 'right'
  children: React.ReactNode
}

const StyledCard = styled.div<{ float: 'left' | 'right' }>`
  display: flex;
  box-shadow: rgb(115 127 143 / 16%) 0px 6px 16px;
  width: 85%;
  min-height: 400px;
  margin: 100px auto;
  position: relative;

  img {
    ${(props) =>
      props.float === 'right' &&
      css`
        order: 2;
      `}
  }

  ${(props) => props.theme.media.desktop_sm} {
    flex-direction: column;
    width: 70%;
    img {
      width: 100%;
      order: -1;
    }
  }
  ${(props) => props.theme.media.tablet} {
    width: 95%;
  }
`

const StyledCardContent = styled.div`
  position: relative;
  padding: 0 25px;
  width: 40%;

  ${(props) => props.theme.media.desktop_sm} {
    padding: 25px;
    width: calc(100% - 50px);
  }
`

export const Card: React.FC<IProps> = (props) => {
  const { cardBanner, children, float } = props

  return (
    <StyledCard float={float}>
      <Image
        src={cardBanner.url}
        alt={cardBanner.alt}
        width="60%"
        variant="square"
      />
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  )
}
