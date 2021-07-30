import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/organisms/Card/Card.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const Card = styled.div<Partial<IThemeProps>>`
  display: flex;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.theme.color.surface};
  width: 85%;
  height: ${(props) => props.height};
  transition: all ${(props) => props.theme.animation.duration.normal};

  ${(props) => style.float[props.float]}
  ${(props) => style.variant[props.variant]}

  ${(props) =>
    props.hoverable &&
    css`
      &:hover {
        transform: translateY(-15px);
      }
    `}
`

const CardContent = styled.div`
  position: relative;
  padding: 25px;
  ${(props) => props.theme.media.desktop_sm} {
    width: calc(100% - 50px);
  }
`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Variant -------------------------------- */
const variant_flex = css`
  flex-direction: row;
  img {
    width: 55%;
  }

  ${(props) => props.theme.media.desktop_sm} {
    flex-direction: column;
    width: 70%;
    height: auto;
    img {
      width: 100%;
      order: -1;
    }
  }
  ${(props) => props.theme.media.tablet} {
    width: 90%;
  }
`

const variant_stack = css`
  flex-direction: column;
  width: 100%;
  height: 550px;
  img {
    height: 250px;
  }
  ${(props) => props.theme.media.desktop_sm} {
    width: 70% !important;
  }
  ${(props) => props.theme.media.tablet} {
    width: 90% !important;
  }
`

/* ---------------------------------- Float --------------------------------- */
const float_left = css`
  img {
    order: -1;
  }
`
const float_right = css`
  img {
    order: 2;
  }
`

/* -------------------------------------------------------------------------- */
/*                                   Module                                   */
/* -------------------------------------------------------------------------- */
export const Styled = { Card, CardContent }

const style = {
  variant: {
    flex: variant_flex,
    stack: variant_stack
  },
  float: {
    left: float_left,
    right: float_right
  }
}
