import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/atoms/Icon/Icon.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const IconRoot = styled.i<Partial<IThemeProps>>`
  color: ${(props) => props.theme.color[props.color]};
  font-size: ${(props) => props.theme.font.size[props.size]};
`

export const Styled = {
  IconRoot
}
