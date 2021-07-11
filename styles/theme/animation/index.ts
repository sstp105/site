import { css, CSSProp, CSSObject } from 'styled-components'

export const animation = {
  duration: {
    slow: '0.8s',
    medium: '0.5s',
    fast: '0.2s'
  },
  animation: {
    fadeIn: css`
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `
  }
}
