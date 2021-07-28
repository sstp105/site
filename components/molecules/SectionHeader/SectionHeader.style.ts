import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/molecules/SectionHeader/SectionHeader.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const SectionHeader = styled.div<Partial<IThemeProps>>`
  ${(props) =>
    props.margin &&
    css`
      margin-bottom: 60px;
    `}
`

export const Styled = {
  SectionHeader
}
