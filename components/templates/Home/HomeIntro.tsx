import React from 'react'
import styled, { css } from 'styled-components'
import { WelcomeChip } from 'components/molecules/Chip/WelcomeChip'
import { RotateAvater } from 'components/organisms/RoutateAvatar'
import { FlexLayout } from 'layout/SectionLayout'
import { Typography } from 'components/atoms/Typography'
import { Link } from 'components/atoms/Link'
import socialMediaData from 'data/socialMedia.json'
import contractData from 'data/contract.json'
import { TextIcon } from 'components/molecules/TextIcon'

const override = css`
  justify-content: space-around;
  margin-top: 150px;
`

const StyledSocialMediaList = styled.div`
  margin: ${(props) => props.theme.space.l} 0;
  transform: translateX(-20px);
`

export const HomeIntro: React.FC = () => {
  return (
    <>
      <FlexLayout otherStyles={override}>
        <div>
          <WelcomeChip content="Hey There, I'm" />
          <Typography variant="h2">YANG LI</Typography>
          <Typography variant="h5">Frontend Developer</Typography>
          {contractData.map((elem) => (
            <TextIcon key={elem.text} icon={elem.icon} text={elem.text} />
          ))}
          <StyledSocialMediaList>
            {socialMediaData.map((elem) => (
              <Link key={elem.link} href={elem.link} variant="social">
                <i className={elem.icon} />
              </Link>
            ))}
          </StyledSocialMediaList>
        </div>
        <RotateAvater />
      </FlexLayout>
    </>
  )
}
