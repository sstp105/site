import React from 'react'
import styled, { css } from 'styled-components'
import { Image } from 'components/atoms/Image'
import { Typography } from 'components/atoms/Typography'
import { Link } from 'components/atoms/Link'
import { Chip } from 'components/molecules/Chip'
import { Flex } from 'components/atoms/Layout'
import socialMediaData from 'data/socialMedia.json'
import contractData from 'data/contract.json'

export const style = {
  screen: {
    tablet: css`
      transform: translateX(0);
      width: 250px;
      order: -1;
      img {
        width: 250px;
      }
    `,
    mobile: css`
      width: 200px;
      height: 250px;
      img {
        width: 200px;
      }
    `
  }
}

const StyledRotateAvatar = styled.div`
  position: relative;
  width: 310px;
  height: 310px;
  transform: translateX(-45px);

  ${(props) => props.theme.media.tablet} {
    ${style.screen.tablet}
  }

  ${(props) => props.theme.media.mobile} {
    ${style.screen.mobile}
  }
`

const override = css`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid ${(props) => props.theme.color.primary};

  ${(props) => props.theme.animation.keyframes.wiggleRotate};
  animation: wiggleRotate 4s infinite;
`

export const RotateAvatar: React.FC = () => {
  return (
    <StyledRotateAvatar>
      <Image
        src="images/avatar.jpg"
        alt="yang avatar"
        width="310px"
        variant="circle"
      />
      <Image
        src="images/avatar-outline.png"
        alt="rotate animation avatar frame"
        width="310px"
        variant="circle"
        css={override}
      />
    </StyledRotateAvatar>
  )
}

const flexContainerStyle = css`
  height: calc(100vh - 75px);
  margin-top: 75px;
  ${(props) => props.theme.media.tablet} {
    padding-top: 75px;
    flex-direction: column;
    height: auto;
  }
`

const welcomeChipStyle = css`
  border-radius: 30px 35px 35px 0px;

  ${(props) => props.theme.media.tablet} {
    margin: 0 auto;
  }
`

const StyledWrapper = styled.div`
  ${(props) => props.theme.media.tablet} {
    text-align: center;
  }
`

const StyledContractList = styled.div`
  ${(props) => props.theme.media.tablet} {
    width: fit-content;
    margin: 0 auto;
  }
`

const StyledSocialMediaList = styled.div`
  margin: ${(props) => props.theme.space.m} 0;
  transform: translateX(-20px);

  ${(props) => props.theme.media.tablet} {
    transform: translateX(0px);
    & > a {
      margin: 0 20px;
    }
  }
`

export const HomeHero: React.FC = () => {
  return (
    <Flex justify="space-around" align="center" css={flexContainerStyle}>
      <StyledWrapper>
        <Chip
          label="Hey There, I'm "
          size="normal"
          hoverable={false}
          css={welcomeChipStyle}
        />
        <Typography variant="h2">YANG LI</Typography>
        <Typography variant="h5" color="primary">
          Frontend Developer
        </Typography>
        <StyledContractList>
          {contractData.map((elem) => (
            <Chip
              key={elem.text}
              label={elem.text}
              icon={elem.icon}
              variant="default"
              space={30}
            />
          ))}
        </StyledContractList>
        <StyledSocialMediaList>
          {socialMediaData.map((elem) => (
            <Link key={elem.link} href={elem.link} variant="social">
              <i className={elem.icon} />
            </Link>
          ))}
        </StyledSocialMediaList>
      </StyledWrapper>
      <RotateAvatar />
    </Flex>
  )
}
