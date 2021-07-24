import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { Typography } from 'components/atoms/Typography'
import { Icon } from 'components/atoms/Icon'
import { Image } from 'components/atoms/Image'
import { Chip } from 'components/molecules/Chip'
import skillData from 'data/about.json'
import { Button } from 'components/atoms/Button'
import { Flex } from 'components/atoms/Layout/Flex'
import { SectionHeader } from 'components/molecules/SectionHeader'

const Wrapper = styled.div`
  /* border: 1px solid red; */
  /* margin: 0 auto; */
  position: relative;
  /* max-width: 1440px; */
`

const StyledContentWrapper = styled.div`
  width: 50%;
  ${(props) => props.theme.media.desktop_md} {
    margin: 0 auto;
    width: 80%;
  }
`

const flexStyle = css`
  ${(props) => props.theme.media.desktop_md} {
    flex-direction: column;
  }
`

const resumeBtnStyle = css`
  position: absolute;
  bottom: 0;

  ${(props) => props.theme.media.desktop_md} {
    position: initial;
    margin-top: 30px;
    width: 100%;
  }
`

const aboutImgStyle = css`
  margin-right: 100px;

  ${(props) => props.theme.media.desktop_md} {
    margin: 0 auto 30px auto;
  }

  ${(props) => props.theme.media.mobile} {
    width: 250px;
  }
`

export const HomeAbout: React.FC = () => {
  return (
    <Wrapper id="about">
      <SectionHeader
        title="About Me"
        subtitle="Love Coding, Competitive Powerlifter, ACG fans."
      />

      <Flex justify="center" align="flex-start" css={flexStyle}>
        <Image
          src="images/about.png"
          alt="About me"
          width="400px"
          height="400px"
          css={aboutImgStyle}
        />
        <StyledContentWrapper>
          <Typography variant="body" margin={false}>
            A BCIT Computer System Technology graduate. I have extensive
            knowledge and project experience of front-end development. I am
            confident with React, Typescript, Material UI, Sass, UI/UX, and
            RESTful API designs.
          </Typography>
          <Typography variant="body">
            Beside my academic and career, I am a competitive powerlifter
            competed at Provincial Champion. My dream is one day step into the
            Canadian Powerlifting Union Stage and competed in national level.
          </Typography>
          <Flex>
            {skillData.map((elem) => (
              <Chip
                size="small"
                variant="outlined"
                key={elem.label}
                label={elem.label}
                icon={elem.icon}
                css={css`
                  margin-right: 10px;
                  margin-bottom: 10px;
                `}
              />
            ))}
          </Flex>
          <Button
            variant="contained"
            endIcon={<Icon iconName="fas fa-download" />}
            css={resumeBtnStyle}
          >
            Download Resume
          </Button>
        </StyledContentWrapper>
      </Flex>
    </Wrapper>
  )
}
