import React from 'react'
import { IProps } from 'components/atoms/Overlay/Overlay.type'
import { Styled } from 'components/atoms/Overlay/Overlay.style'

export const Overlay: React.FC<IProps> = (props) => {
  const { onClose, testId } = props

  return <Styled.Overlay data-testid={testId} onClick={onClose} />
}
