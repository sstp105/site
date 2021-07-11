import { css } from 'styled-components'

type DurationType = 'slow' | 'normal' | 'fast'
type KeyframeType = 'fadeIn'

const duration: Record<DurationType, string> = {
  slow: '0.8s',
  normal: '0.5s',
  fast: '0.2s'
}

const keyframes: Record<KeyframeType, any> = {
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

export const animation = {
  duration,
  keyframes
}
