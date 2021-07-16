import React from 'react'
import styled, { css } from 'styled-components'
import { Typography } from 'components/atoms/Typography'

interface IDefaultProps {}

interface IProps extends Partial<IDefaultProps> {
  title: string
  subtitle: string
}

const StyledContainer = styled.div`
  margin-bottom: 60px;
`

export const SectionHeader: React.FC<IProps> = (props) => {
  const { title, subtitle } = props

  return (
    <StyledContainer>
      <Typography
        variant="h3"
        transform="uppercase"
        align="center"
        margin={false}
      >
        {title}
      </Typography>
      <Typography variant="caption" color="caption" align="center">
        {subtitle}
      </Typography>
    </StyledContainer>
  )
}
