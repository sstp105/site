import { css } from 'styled-components'

type DurationType = 'slow' | 'normal' | 'fast'
type KeyframeType = 'fadeIn' | 'wiggleRotate'

const duration: Record<DurationType, string> = {
  slow: '0.8s',
  normal: '0.5s',
  fast: '0.2s'
}

const keyframes: Record<KeyframeType, any> = {
  // 透明度缓入
  fadeIn: css`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,

  // 摇摆旋转动画
  wiggleRotate: css`
    @keyframes wiggleRotate {
      0% {
        transform: rotate(0deg) scale(1.12);
      }
      50% {
        transform: rotate(180deg) scale(1.15);
      }
      100% {
        transform: rotate(0deg) scale(1.12);
      }
    }
  `
}

export const animation = {
  duration,
  keyframes
}
