import { AosOptions } from 'aos'

export const AOS_INIT_CONFIG: AosOptions = {
  offset: 300,
  duration: 1000,
  easing: 'ease',
  delay: 100,
  once: true // disable animation when scroll back
}

export type AOSZoomDirection = 'in' | 'out'
export type AOSVerticalDirection = 'up' | 'down'
export type AOSHorizontalDirection = 'left' | 'right'
export type AOSDirection = AOSVerticalDirection | AOSHorizontalDirection

export type AOSFadeAnimation =
  | 'fade'
  | `fade-${AOSDirection}`
  | `fade-${AOSVerticalDirection}-${AOSHorizontalDirection}`

export type AOSFlipAnimation = `flip-${AOSDirection}`

export type AOSSlideAnimation = `slide-${AOSDirection}`

export type AOSZoomAnimation =
  | `zoom-${AOSZoomDirection}`
  | `zoom-${AOSZoomDirection}-${AOSDirection}`

export type AOSAnimation =
  | AOSFadeAnimation
  | AOSFadeAnimation
  | AOSSlideAnimation
  | AOSZoomAnimation

export const createAOSAnimation = (animation: AOSAnimation) => {
  return animation
}
