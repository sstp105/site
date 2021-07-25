import React from 'react'
import { Styled } from 'components/atoms/Spacer/Spacer.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/atoms/Spacer/Spacer.type'

export const Spacer: React.FC<IProps> = (props) => {
  const { testId, ...themeProps } = props
  return <Styled.Spacer {...themeProps} data-testid={testId} />
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  verticalSpace: '30px',
  horizontalSpace: '100%'
}

Spacer.defaultProps = defaultProps
