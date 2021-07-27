import React from 'react'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/molecules/Chip/Chip.type'
import { Styled } from 'components/molecules/Chip/Chip.style'
import { Icon } from 'components/atoms/Icon'

export const Chip: React.FC<IProps> = (props) => {
  const { testId, label, icon, ...themeProps } = props

  return (
    <Styled.Chip {...themeProps}>
      {icon && <Icon iconName={icon} />}
      <p>{label}</p>
    </Styled.Chip>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  size: 'normal',
  variant: 'contained',
  rounded: true,
  hoverable: true,
  space: 10
}

Chip.defaultProps = defaultProps
