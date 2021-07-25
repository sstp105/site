import styled from 'styled-components'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const InputRoot = styled.div`
  width: calc(100% - 42px); // minus the padding and border
  margin-bottom: 30px;
`

const Input = styled.input`
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  outline: none;
  color: ${(props) => props.theme.color.typography};
  background-color: transparent;
  font-size: 16px;
  font-family: ${(props) => props.theme.font.family.gilroy_regular};
  border: 1px solid ${(props) => props.theme.color.border_base};
  transition: all ${(props) => props.theme.animation.duration.normal};

  &:focus {
    border: 1px solid ${(props) => props.theme.color.border_primary};
  }
`

export const Styled = {
  Input,
  InputRoot
}
