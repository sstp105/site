import React from 'react'
import { Styled } from 'components/molecules/Drawer/Drawer.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/molecules/Drawer/Drawer.type'
import { Overlay } from 'components/atoms/Overlay'

export const Drawer: React.FC<IProps> = (props) => {
  const { testId, open, onClose, children, ...themeProps } = props

  if (!open) return null
  return (
    <>
      <Overlay onClose={onClose} />
      <Styled.Drawer {...themeProps} data-testid={testId}>
        {children}
      </Styled.Drawer>
    </>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  anchor: 'left',
  variant: 'round'
}

Drawer.defaultProps = defaultProps
