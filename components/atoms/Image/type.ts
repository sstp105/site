export interface IDefaultProps {
  width: string
  height: string
  variant: 'circle' | 'rounded' | 'square'
  cover: 'cover' | 'contain'
  shadow: boolean
}

export interface IProps extends Partial<IDefaultProps> {
  src: string
  alt: string
}
