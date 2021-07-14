import { css } from 'styled-components'

/**
 * variant
 */
const contained_variant = css`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
  &:hover {
    opacity: 0.7;
  }
`
const outlined_variant = css`
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`
const text_variant = css`
  color: ${({ theme }) => theme.color.primary};
  &:hover {
    background-color: #3da4d44b;
  }
`

/**
 * size
 */
const s_size = css`
  font-size: 16px;
  padding: 8px 30px;
`
const m_size = css`
  font-size: 18px;
  padding: 12px 40px;
`
const l_size = css`
  font-size: 20px;
  padding: 16px 50px;
`

export const style = {
  variant: {
    contained: contained_variant,
    outlined: outlined_variant,
    text: text_variant
  },
  size: {
    s: s_size,
    m: m_size,
    l: l_size
  }
}
