import { CSSObject, CSSProp } from 'styled-components'

export interface IProps {
  href: string
  variant?: 'default' | 'navigation' | 'social'
  children: React.ReactNode
}
