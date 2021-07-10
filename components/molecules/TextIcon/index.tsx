import React from 'react'
import styled, { css } from 'styled-components'
import { IProps } from 'components/molecules/TextIcon/type'
import { style } from 'components/molecules/TextIcon/style'
import { Icon } from 'components/atoms/Icon'
import { Typography } from 'components/atoms/Typography'
import { Flex } from 'layout/Flex'

const FlexContainer = styled(Flex)<IProps>`
  padding: 10px 0;

  // space between icon and text
  & > i {
    margin-right: ${(props) => props.space}px;
  }

  & > p,
  i {
    ${(props) => style.variant[props.variant]}
  }
`

export const TextIcon: React.FC<IProps> = (props) => {
  const { icon, text } = props
  return (
    <FlexContainer {...props}>
      <Icon iconName={icon} />
      <Typography variant="caption" margin={false}>
        {text}
      </Typography>
    </FlexContainer>
  )
}

TextIcon.defaultProps = {
  variant: 's',
  space: 30
}
