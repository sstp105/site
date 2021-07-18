import styled from 'styled-components'
import { IDefaultProps, IProps } from 'components/atoms/TextField/type'

const StyledInput = styled.input`
  width: calc(100% - 42px); // minus the padding and border
  padding: 20px;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  font-family: ${(props) => props.theme.font.family.gilroy_regular};
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.5s;

  &:focus {
    border: 1px solid ${(props) => props.theme.color.border_primary};
  }
`

export const TextField: React.FC<IProps> = (props) => {
  const { size, fullWidth, ...inputProps } = props

  return <StyledInput {...inputProps} />
}

const defaultProps: IDefaultProps = {
  size: 'medium',
  fullWidth: false,
  placeholder: '',
  autocomplete: 'off'
}

TextField.defaultProps = defaultProps
