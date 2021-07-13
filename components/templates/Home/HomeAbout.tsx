import React from 'react'
import styled from 'styled-components'
import { Typography } from 'components/atoms/Typography'
import { Flex } from 'layout/Flex'

const Wrapper = styled.div`
  border: 1px solid red;
  margin: 0 auto;
`

export const HomeAbout: React.FC = () => {
  return (
    <Wrapper>
      <Typography variant="h3" transform="uppercase">
        About Me
      </Typography>
      <Typography variant="caption">
        Love Coding, Competitive Powerlifter, ACG fans.
      </Typography>
    </Wrapper>
  )
}
