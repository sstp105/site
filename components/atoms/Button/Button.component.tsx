import { Styled } from 'components/atoms/Button/Button.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/atoms/Button/Button.type'

export const Button: React.FC<IProps> = (props) => {
  const { children, startIcon, endIcon, testId, ...themeProps } = props

  return (
    <Styled.ButtonRoot {...themeProps} data-testid={testId}>
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </Styled.ButtonRoot>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  variant: 'contained',
  size: 'm',
  fullWidth: false,
  verticalSpace: 0,
  startIcon: <></>,
  endIcon: <></>,
  onClick: () => {}
}

Button.defaultProps = defaultProps
