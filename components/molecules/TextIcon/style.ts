import { css } from 'styled-components'

/**
 * TextIcon component variant size: small, medium, large
 */
const SIZE = {
  small: css`
    font-size: 16px;
  `,
  medium: css`
    font-size: 20px;
  `,
  large: css`
    font-size: 24px;
  `
}

export const style = {
  variant: {
    s: SIZE.small,
    m: SIZE.medium,
    l: SIZE.large
  }
}
