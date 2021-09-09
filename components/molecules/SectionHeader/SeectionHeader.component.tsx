import React from 'react'
import { Styled } from 'components/molecules/SectionHeader/SectionHeader.style'
import { Typography } from 'components/atoms/Typography'
import {
  IProps,
  IDefaultProps,
  PropsToOmit
} from 'components/molecules/SectionHeader/SectionHeader.type'

export const SectionHeader: React.FC<IProps> = (props) => {
  const { title, subtitle, testId, transform, ...themeProps } = props

  return (
    <Styled.SectionHeader data-testid={testId} {...themeProps}>
      <Typography
        variant="h3"
        transform={transform}
        align="center"
        margin={false}
      >
        {title}
      </Typography>
      <Typography variant="caption" color="caption" align="center">
        {subtitle}
      </Typography>
    </Styled.SectionHeader>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  margin: true,
  transform: 'uppercase'
}

SectionHeader.defaultProps = defaultProps
