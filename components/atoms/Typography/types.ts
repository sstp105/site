import { Colors } from 'types/Color'

export interface IProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'caption'
    | 'overline'
  children: React.ReactNode
  color?: Colors
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  display?: 'initial' | 'block' | 'inline'
  margin?: boolean
}
