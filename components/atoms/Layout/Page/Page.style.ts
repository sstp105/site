import styled from 'styled-components'
import { IThemeProps } from 'components/atoms/Layout/Page/Page.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const PageRoot = styled.div<Partial<IThemeProps>>`
  margin: 0 auto ${(props) => props.margin}px auto;
  max-width: ${(props) => props.width}px;
`

export const Styled = {
  PageRoot
}
