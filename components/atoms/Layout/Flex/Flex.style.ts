import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/atoms/Layout/Flex/Flex.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const FlexRoot = styled.div<Partial<IThemeProps>>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${(props) => props.shadow && props.theme.shadow.normal}
`

export const Styled = {
  FlexRoot
}
