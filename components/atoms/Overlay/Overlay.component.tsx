import React from 'react'
import {
  IProps,
  IDefaultProps,
  PropsToOmit
} from 'components/atoms/Overlay/Overlay.type'
import { Styled } from 'components/atoms/Overlay/Overlay.style'

export const Overlay: React.FC<IProps> = (props) => {
  const { onClose, testId, ...themeProps } = props

  return (
    <Styled.Overlay data-testid={testId} onClick={onClose} {...themeProps} />
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  fullSize: true,
  onClose: () => {}
}

Overlay.defaultProps = defaultProps
