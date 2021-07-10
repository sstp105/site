import React from 'react'
import styled, { css } from 'styled-components'
import { IDefaultProps, IProps } from 'components/molecules/Chip/type'
import { styles } from 'components/molecules/Chip/style'
import { Icon } from 'components/atoms/Icon'

const StyledChip = styled.div<IProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animation.duration.medium};

  & > i {
    margin-right: 10px;
  }

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 25px;
    `}

  ${(props) =>
    props.hoverable &&
    css`
      &:hover {
        opacity: 0.5;
      }
    `}
  ${(props) => styles.variant[props.variant]}
  ${(props) => styles.size[props.size]}
`

export const Chip: React.FC<IProps> = (props) => {
  const { label, icon } = props

  return (
    <StyledChip {...props}>
      {icon && <Icon iconName={icon} />}
      <p>{label}</p>
    </StyledChip>
  )
}

const defaultProps: Omit<IDefaultProps, 'icon'> = {
  size: 'normal',
  variant: 'default',
  rounded: true,
  hoverable: true
}

Chip.defaultProps = defaultProps
