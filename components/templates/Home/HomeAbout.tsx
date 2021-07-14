import React from 'react'
import styled from 'styled-components'
import { Typography } from 'components/atoms/Typography'
import { Flex } from 'layout/Flex'
import { Button } from 'components/atoms/Button'
import { Icon } from 'components/atoms/Icon'
const Wrapper = styled.div`
  border: 1px solid red;
  padding: 0 20px;
`

const Spacer = styled.div`
  height: 20px;
  display: block;
`

const MyIcon = <Icon iconName="fas fa-download" />

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
