import { AosOptions, AnimationOptions } from 'aos'

export const AOS_INIT_CONFIG: AosOptions = {
  offset: 300,
  duration: 1000,
  easing: 'ease',
  delay: 100,
  once: true // disable animation when scroll back
}

export const createAOSAnimation = (animation: AnimationOptions) => animation
