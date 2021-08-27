import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/atoms/Typography/Typography.types'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const TypographyRoot = styled.p<Partial<IThemeProps>>`
  color: ${(props) =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.color.typography};
  text-align: ${(props) => props.align};
  display: ${(props) => props.display};
  text-transform: ${(props) => props.transform};

  ${(props) =>
    props.margin &&
    css`
      margin: 20px 0;
    `}
  ${(props) => styles.variant[props.variant]}
`

export const Styled = {
  TypographyRoot
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
const styles = {
  variant: {
    h1: css`
      font-family: Gilroy-Light;
      font-size: 96px;
      letter-spacing: -1.5px;
    `,
    h2: css`
      font-family: ${({ theme }) => theme.font.family.gilroy_regular};
      font-size: 65px;
      letter-spacing: 4px;
    `,
    h3: css`
      font-family: Gilroy-Regular;
      font-size: 48px;
      letter-spacing: 0px;
    `,
    h4: css`
      font-family: Gilroy-Regular;
      font-size: 34px;
      letter-spacing: 0.25px;
    `,
    h5: css`
      font-family: Gilroy-Regular;
      font-size: 24px;
      letter-spacing: 0px;
    `,
    h6: css`
      font-family: Gilroy-Regular;
      font-size: 20px;
      letter-spacing: 0.15px;
    `,
    subtitle: css`
      font-family: Gilroy-Medium;
      font-size: 18px;
    `,
    body: css`
      font-family: Gilroy-Regular;
      font-size: 15px;
      letter-spacing: 0.5px;
      line-height: 1.7rem;
    `,
    overline: css`
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    `,
    caption: css`
      font-family: Gilroy-Regular;
      font-size: 18px;
    `,
    note: css`
      font-family: Gilroy-Regular;
      font-size: 14px;
      line-height: 1.3rem;
    `
  }
}
