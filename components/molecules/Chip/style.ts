import { css } from 'styled-components'

/**
 * Variant styles
 * default | outlined (non-bg)
 */
const defaultVariant = css`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
`

const outlinedVariant = css`
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`

/**
 * Size styles
 * small | normal | large
 */
const smallSize = css`
  font-size: 13px;
  padding: 10px 10px;
`
const normalSize = css`
  font-size: 16px;
  padding: 10px 15px;
`
const largeSize = css`
  font-size: 20px;
  padding: 10px 20px;
`

export const styles = {
  variant: {
    default: defaultVariant,
    outlined: outlinedVariant
  },
  size: {
    small: smallSize,
    normal: normalSize,
    large: largeSize
  }
}
