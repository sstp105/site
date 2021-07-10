export interface IProps {
  src: string
  alt: string
  width?: string
  height?: string
  variant?: 'circle' | 'rounded' | 'square'
  cover?: 'cover' | 'contain'
  shadow?: boolean
}
