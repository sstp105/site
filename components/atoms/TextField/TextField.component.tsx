import { Styled } from 'components/atoms/TextField/TestField.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/atoms/TextField/TextField.type'

export const TextField: React.FC<IProps> = (props) => {
  const { testId, inputTestId, size, fullWidth, ...inputProps } = props
  const themeProps = { size, fullWidth }

  return (
    <Styled.InputRoot data-testid={testId} {...themeProps}>
      <Styled.Input data-testid={inputTestId} {...inputProps} />
    </Styled.InputRoot>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  size: 'medium',
  fullWidth: false,
  placeholder: '',
  autocomplete: 'off'
}

TextField.defaultProps = defaultProps
