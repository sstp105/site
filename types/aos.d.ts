import {} from 'aos'

declare module 'aos' {
  type ZoomDirection = 'in' | 'out'
  type VerticalDirection = 'up' | 'down'
  type HorizontalDirection = 'left' | 'right'
  type Direction = VerticalDirection | HorizontalDirection

  type FadeAnimation =
    | 'fade'
    | `fade-${Direction}`
    | `fade-${VerticalDirection}-${HorizontalDirection}`
  type FlipAnimation = `flip-${Direction}`
  type SlideAnimation = `slide-${Direction}`
  type ZoomAnimation =
    | `zoom-${ZoomDirection}`
    | `zoom-${ZoomDirection}-${Direction}`

  export type AnimationOptions =
    | FadeAnimation
    | FadeAnimation
    | SlideAnimation
    | ZoomAnimation
}
