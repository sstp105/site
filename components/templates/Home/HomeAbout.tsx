import React from 'react'
import styled, { css } from 'styled-components'
import { Typography } from 'components/atoms/Typography'
import { Icon } from 'components/atoms/Icon'
import { Image } from 'components/atoms/Image'
import { Chip } from 'components/molecules/Chip'
import skillData from 'data/about.json'
import { Button } from 'components/atoms/Button'

const Wrapper = styled.div`
  border: 1px solid red;
  padding: 0 20px;
`

const Spacer = styled.div`
  height: 20px;
  display: block;
`

const DownloadIcon = <Icon iconName="fas fa-download" />

export const HomeAbout: React.FC = () => {
  return (
    <Wrapper>
      <Typography variant="h3" transform="uppercase">
        About Me
      </Typography>
      <Typography variant="caption" color="caption">
        Love Coding, Competitive Powerlifter, ACG fans.
      </Typography>
      <Image src="static/images/about.png" alt="About me" width="400px" />
      <Typography variant="body">
        A BCIT Computer System Technology graduate. I have extensive knowledge
        and project experience of front-end development. I am confident with
        React, Typescript, Material UI, Sass, UI/UX, and RESTful API designs.
      </Typography>
      <Typography variant="body">
        Beside my academic and career, I am a competitive powerlifter competed
        at Provincial Champion. My dream is one day step into the Canadian
        Powerlifting Union Stage and competed in national level.
      </Typography>

      <div style={{ display: 'flex' }}>
        {skillData.map((elem) => (
          <Chip
            variant="outlined"
            key={elem.label}
            label={elem.label}
            icon={elem.icon}
            css={css`
              margin-right: 10px;
            `}
          />
        ))}
      </div>
      <Button variant="contained" endIcon={DownloadIcon}>
        Download Resume
      </Button>
    </Wrapper>
  )
}
