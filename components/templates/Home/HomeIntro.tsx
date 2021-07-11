import React from 'react'
import styled, { css } from 'styled-components'
import { RotateAvater } from 'components/organisms/RoutateAvatar'
import { FlexLayout } from 'layout/SectionLayout'
import { Typography } from 'components/atoms/Typography'
import { Link } from 'components/atoms/Link'
import socialMediaData from 'data/socialMedia.json'
import contractData from 'data/contract.json'
import { TextIcon } from 'components/molecules/TextIcon'
import { Chip } from 'components/molecules/Chip'

const override = css`
  justify-content: space-around;
  margin-top: 150px;

  ${(props) => props.theme.media.m} {
    margin-top: 80px;
    flex-direction: column;
  }
`

const StyledSocialMediaList = styled.div`
  margin: ${(props) => props.theme.space.l} 0;
  transform: translateX(-20px);
  ${(props) => props.theme.media.m} {
    transform: translateX(0px);
    & > a {
      margin: 0 20px;
    }
  }
`

const StyledWrapper = styled.div`
  ${(props) => props.theme.media.m} {
    text-align: center;
  }
`

const ContractWrapper = styled.div`
  ${(props) => props.theme.media.m} {
    width: fit-content;
    margin: 0 auto;
  }
`

const welcomeChipStyle = css`
  border-radius: 30px 35px 35px 0px;
  ${(props) => props.theme.media.m} {
    margin: 0 auto;
  }
`

export const HomeIntro: React.FC = () => {
  return (
    <>
      <FlexLayout css={override}>
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

          <ContractWrapper>
            {contractData.map((elem) => (
              <TextIcon key={elem.text} icon={elem.icon} text={elem.text} />
            ))}
          </ContractWrapper>

          <StyledSocialMediaList>
            {socialMediaData.map((elem) => (
              <Link key={elem.link} href={elem.link} variant="social">
                <i className={elem.icon} />
              </Link>
            ))}
          </StyledSocialMediaList>
        </StyledWrapper>
        <RotateAvater />
      </FlexLayout>
    </>
  )
}
