import styled, { css } from 'styled-components'
import { style } from 'components/atoms/Button/Button.style'
import {
  IThemeProps,
  IDefaultProps,
  IProps
} from 'components/atoms/Button/Button.type'

const StyledButton = styled.button<Partial<IThemeProps>>`
  display: block;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family.gilroy_regular};
  background-color: transparent;
  border: none;
  border-radius: 30px;
  transition: all ${({ theme }) => theme.animation.duration.normal};

  & > i:nth-child(1) {
    margin-right: 20px;
  }
  & > i:nth-child(2) {
    margin-left: 20px;
  }

  // variant
  margin: ${({ verticalSpace }) => verticalSpace}px 0;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  ${({ variant }) => style.variant[variant]}
  ${({ size }) => style.size[size]}
`

export const Button: React.FC<IProps> = (props) => {
  const { children, startIcon, endIcon, testId, ...themeProps } = props

  return (
    <StyledButton {...themeProps} data-testid={testId}>
      {startIcon && startIcon}
      <span>{children}</span>
      {endIcon && endIcon}
    </StyledButton>
  )
}

const defaultProps: Omit<IDefaultProps, 'testId'> = {
  variant: 'contained',
  size: 'm',
  fullWidth: false,
  verticalSpace: 0,
  startIcon: <></>,
  endIcon: <></>,
  onClick: () => {}
}

Button.defaultProps = defaultProps
