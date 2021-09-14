import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/atoms/Paper/Paper.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const Paper = styled.div<Partial<IThemeProps>>`
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background-color: ${(props) => props.theme.color.surface_shadow};
  transition: all ${({ theme }) => theme.animation.duration.slow};
  border-radius: 20px;
  ${(props) => props.theme.media.desktop_sm} {
    margin-bottom: 40px;
  }
  &:hover {
    transform: translate3d(0, -10px, 0);
  }

  ${(props) =>
    props.square &&
    css`
      border-radius: 0;
    `}

  ${(props) => style.variant[props.variant]}
`

export const Styled = {
  Paper
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
export const style = {
  variant: {
    elevation: css`
      box-shadow: ${(props) => props.theme.color.box_shadow};
    `,
    outlined: css`
      border: 1px solid rgba(0, 0, 0, 0.2);
    `
  }
}
