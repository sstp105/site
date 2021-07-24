import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/atoms/Image/Image.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const ImageRoot = styled.img<Partial<IThemeProps>>`
  display: block;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: ${(props) => props.cover};

  ${(props) => props.shadow && props.theme.shadow.normal}
  ${(props) => styles.variant[props.variant]}
`

export const Styled = {
  ImageRoot
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const styles = {
  variant: {
    rounded: css`
      border-radius: 15px;
    `,
    circle: css`
      border-radius: 50%;
    `
  }
}
