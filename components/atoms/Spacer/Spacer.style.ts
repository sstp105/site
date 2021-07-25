import styled from 'styled-components'
import { IThemeProps } from 'components/atoms/Spacer/Spacer.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const Spacer = styled.div<Partial<IThemeProps>>`
  width: ${(props) => props.horizontalSpace};
  height: ${(props) => props.verticalSpace};
`

export const Styled = {
  Spacer
}
