import React from 'react'
import { Styled } from 'components/atoms/Image/Image.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/atoms/Image/Image.type'

export const Image: React.FC<IProps> = (props) => {
  const { testId, ...imgProps } = props

  return <Styled.ImageRoot {...imgProps} data-testid={testId} />
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  width: '100%',
  height: 'auto',
  cover: 'cover',
  variant: 'rounded',
  shadow: false,
  alt: ''
}

Image.defaultProps = defaultProps
