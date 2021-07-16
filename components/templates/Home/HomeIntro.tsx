import React from 'react'
import styled, { css } from 'styled-components'
import { RotateAvater } from 'components/molecules/RotateAvatar'
import { Typography } from 'components/atoms/Typography'
import { Link } from 'components/atoms/Link'
import { TextIcon } from 'components/molecules/TextIcon'
import { Chip } from 'components/molecules/Chip'
import { Flex } from 'layout/Flex'
import socialMediaData from 'data/socialMedia.json'
import contractData from 'data/contract.json'

const flexContainerStyle = css`
  height: calc(100vh - 75px);
  ${(props) => props.theme.media.tablet} {
    padding-top: 50px;
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

// component wrappers
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
            <TextIcon key={elem.text} icon={elem.icon} text={elem.text} />
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
      <RotateAvater />
    </Flex>
  )
}
