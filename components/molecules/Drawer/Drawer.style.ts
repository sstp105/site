import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/molecules/Drawer/Drawer.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const Drawer = styled.div<Partial<IThemeProps>>`
  z-index: 2;
  position: fixed;
  top: 0;
  width: 70%;
  height: 100%;
  background-color: ${(props) => props.theme.color.surface};

  ${(props) => props.theme.shadow.normal}

  ${(props) => style.anchor[props.anchor]}
  ${(props) => style.variant[props.variant][props.anchor]} 

  animation: slideIn ${({ theme }) => theme.animation.duration.slow} ease;
`

export const Styled = {
  Drawer
}
/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
/**
 * Anchor position style
 * left | right
 */
const anchorLeft = css`
  left: 0;
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`

const anchorRight = css`
  right: 0;
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`

/**
 * Variant styles
 * rounded | square
 */
const roundedLeft = css`
  border-radius: 0 15px 15px 0;
`

const roundedRight = css`
  border-radius: 15px 0 0 15px;
`

const square = css`
  border-radius: 0;
`

export const style = {
  variant: {
    round: {
      left: roundedLeft,
      right: roundedRight
    },
    square: square
  },
  anchor: {
    left: anchorLeft,
    right: anchorRight
  }
}
