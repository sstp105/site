import { css } from 'styled-components'

/**
 * Variant styles
 * default | outlined (non-bg)
 */
const defaultVariant = css`
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.primary};
`

const outlinedVariant = css`
  border: 1px solid ${(props) => props.theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
`

/**
 * Size styles
 * small | normal | large
 */
const smallSize = css`
  font-size: 13px;
  padding: 8px 10px;
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
