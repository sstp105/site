export type MetaAttributeName =
  | 'application-name'
  | 'author'
  | 'description'
  | 'generator'
  | 'keywords'
  | 'viewport'

export type MetaAttributeHttpEquiv =
  | 'content-security-policy'
  | 'content-type'
  | 'default-style'
  | 'refresh'

export interface MetaAttribute {
  charset: string
  httpEquiv: MetaAttributeHttpEquiv
  content: string
  name: MetaAttributeName
}
