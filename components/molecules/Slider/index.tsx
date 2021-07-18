import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Card } from 'components/organisms/Card'
import { Image } from 'components/atoms/Image'
import portfolioData from 'data/portfolio.json'
import { Button } from 'components/atoms/Button'
import { Typography } from 'components/atoms/Typography'
import { Chip } from 'components/molecules/Chip'
import { Flex } from 'layout/Flex'

const ContentWrapper = styled.div`
  position: relative;
  height: 500px;

  ${(props) => props.theme.media.desktop_sm} {
    height: 800px;
  }
`

const forwardArrow = css`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 1;
  cursor: pointer;
  ${(props) => props.theme.media.tablet} {
    width: 25px;
    height: 25px;
  }
`

const backwardArrow = css`
  position: absolute;
  top: 50%;
  left: 0;
  transform: rotate(180deg);
  z-index: 1;
  cursor: pointer;
  ${(props) => props.theme.media.tablet} {
    width: 25px;
    height: 25px;
  }
`

const StyledDemo = styled.div<{ active: boolean }>`
  position: absolute;
  width: 90%;
  transition: all 1s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${(props) =>
    props.active
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`

export const HomePortfolio: React.FC = () => {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex((prevState) => prevState + 1)
  }

  const handlePrevious = () => {
    setIndex((prevState) => prevState - 1)
  }

  return (
    <ContentWrapper>
      <Image
        src="static/images/right-arrow.png"
        alt="Forward icon"
        width="50px"
        height="50px"
        css={forwardArrow}
        onClick={handleNext}
      />
      <Image
        src="static/images/right-arrow.png"
        alt="Backward icon"
        width="50px"
        height="50px"
        css={backwardArrow}
        onClick={handlePrevious}
      />
      {portfolioData.map((elem, elemindex) => (
        <StyledDemo key={elem.banner} active={elemindex === index}>
          {elemindex === index && (
            <Card cardBanner={{ url: elem.banner, alt: elem.title }}>
              <Typography variant="h5">{elem.title}</Typography>
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
              <Button variant="contained" fullWidth>
                Read More
              </Button>
            </Card>
          )}
        </StyledDemo>
      ))}
    </ContentWrapper>
  )
}
