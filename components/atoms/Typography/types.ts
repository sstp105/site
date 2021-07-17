import { Colors } from 'types/Color'

export interface IDefaultProps {
  color: Colors
  align: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  display: 'initial' | 'block' | 'inline'
  margin: boolean
  transform:
    | 'capitalize'
    | 'lowercase'
    | 'uppercase'
    | 'none'
    | 'inherit'
    | 'initial'
    | 'unset'
}

export interface IProps extends Partial<IDefaultProps> {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle'
    | 'body'
    | 'caption'
    | 'overline'
    | 'note'
  children: React.ReactNode
}
