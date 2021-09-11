import React from 'react'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/molecules/Chip/Chip.type'
import { Styled } from 'components/molecules/Chip/Chip.style'
import { Icon } from 'components/atoms/Icon'

export const Chip: React.FC<IProps> = (props) => {
  const { testId, iconTestId, label, icon, ...themeProps } = props

  return (
    <Styled.Chip {...themeProps} data-testid={testId}>
      {icon && <Icon testId={iconTestId} iconName={icon} />}
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
