import React from 'react'
import { Styled } from 'components/atoms/Flex/Flex.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/atoms/Flex/Flex.type'

export const Flex: React.FC<IProps> = (props) => {
  const { children, testId, ...themeProps } = props

  return (
    <Styled.FlexRoot data-testid={testId} {...themeProps}>
      {children}
    </Styled.FlexRoot>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  justify: 'flex-start',
  align: 'center',
  shadow: false,
  autoWrap: true
}

Flex.defaultProps = defaultProps
