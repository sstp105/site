import styled from 'styled-components'
import { IThemeProps } from 'components/atoms/Page/Page.type'
import { breakPoints } from 'styles/theme/media'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const PageRoot = styled.div<Partial<IThemeProps>>`
  margin: 0 auto ${(props) => props.margin}px auto;
  max-width: ${(props) => breakPoints[props.width]}px;
`

export const Styled = {
  PageRoot
}
