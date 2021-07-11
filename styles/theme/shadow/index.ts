import { css, CSSProp, CSSObject } from 'styled-components'

type ShadowVariant = 'light' | 'normal' | 'strong'

export const shadow: Record<ShadowVariant, any> = {
  light: '',
  normal: css`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `,
  strong: ''
}
