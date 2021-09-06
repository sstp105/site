import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/atoms/Layout/Flex/Flex.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const FlexRoot = styled.div<Partial<IThemeProps>>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  ${(props) =>
    props.autoWrap &&
    css`
      flex-wrap: wrap;
    `}

  ${(props) =>
    props.breakPoint &&
    css`
      ${props.theme.media[props.breakPoint]} {
        flex-direction: column;
      }
    `}

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
