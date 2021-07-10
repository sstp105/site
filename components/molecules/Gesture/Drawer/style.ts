import { css } from 'styled-components'

/**
 * Anchor position style
 * left | right
 */
const anchorLeft = css`
  left: 0;
  transform: translateX(-100%);
`

const anchorRight = css`
  right: 0;
  transform: translateX(100%);
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
