import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/atoms/Icon/Icon.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const IconRoot = styled.i<Partial<IThemeProps>>`
  color: ${(props) => props.theme.color[props.color]};
  font-size: ${(props) => props.theme.font.size[props.size]};

  ${(props) =>
    props.hoverable &&
    css`
      &:hover {
        color: ${(props) => props.theme.color.primary};
      }
    `}
`

export const Styled = {
  IconRoot
}
