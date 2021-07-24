import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { Card } from 'components/organisms/Card'
import portfolioData from 'data/portfolio.json'
import { Button } from 'components/atoms/Button'
import { Typography } from 'components/atoms/Typography'
import { Chip } from 'components/molecules/Chip'
import { Flex } from 'components/atoms/Layout'

const Wrapper = styled.div`
  /* border: 1px solid green; */
`

const readMoreBtnStyle = css`
  position: absolute;
  bottom: 25px;
  width: calc(100% - 50px);

  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
    position: initial;
  }
`

export const HomePortfolio: React.FC = () => {
  return (
    <Wrapper id="portfolio">
      <SectionHeader title="Portfolio" subtitle="Learn by Doing." />
      {/* <div> */}
      {portfolioData.map((elem, index) => (
        <Card
          key={elem.banner}
          cardBanner={{ url: elem.banner, alt: elem.title }}
          variant="flex"
          float={index % 2 == 0 ? 'left' : 'right'}
          height="400px"
          css={css`
            margin-bottom: 50px;
          `}
        >
          <Typography variant="h5" margin={false}>
            {elem.title}
          </Typography>
          <Typography variant="body">{elem.desc}</Typography>
          <Flex
            css={css`
              margin: 20px 0;
            `}
          >
            {elem.tags.map((t) => (
              <Chip
                key={t}
                label={t}
                variant="outlined"
                size="small"
                css={css`
                  margin-right: 10px;
                  margin-bottom: 10px;
                `}
              />
            ))}
          </Flex>
          <Button variant="contained" fullWidth css={readMoreBtnStyle}>
            Read More
          </Button>
        </Card>
      ))}
      {/* </div> */}
    </Wrapper>
  )
}
