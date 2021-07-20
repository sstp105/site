import React from 'react'
import styled, { css } from 'styled-components'
import { style } from 'components/atoms/Button/style'
import { IDefaultProps, IProps } from 'components/atoms/Button/type'

const StyledButton = styled.button<IProps>`
  display: block;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 30px;
  font-family: ${(props) => props.theme.font.family.gilroy_regular};
  transition: all 0.5s;

  // startIcon space
  & > i:nth-child(1) {
    margin-right: 20px;
  }
  // endIcon space
  & > i:nth-child(2) {
    margin-left: 20px;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  margin: ${(props) => props.verticalSpace}px 0;

  ${(props) => style.variant[props.variant]}
  ${(props) => style.size[props.size]}
`

export const Button: React.FC<IProps> = (props) => {
  const { children, startIcon, endIcon, ...rest } = props

  return (
    <StyledButton {...rest}>
      {startIcon && startIcon}
      <span>{children}</span>
      {endIcon && endIcon}
    </StyledButton>
  )
}

const defaultProps: IDefaultProps = {
  startIcon: <></>,
  endIcon: <></>,
  fullWidth: false,
  size: 'm',
  verticalSpace: 0,
  onClick: () => {}
}

Button.defaultProps = defaultProps
