import { MetaAttributeName } from 'types/html/Meta'

export const getHead = (): string => {
  return document.title || ''
}

export const getMetaName = (metaName: MetaAttributeName): string => {
  const metas = document.getElementsByTagName('meta')

  for (let i = 0; i < metas.length; i++) {
    const metaElem = metas[i]

    if (metaElem.getAttribute('name') === metaName) {
      return metaElem.getAttribute('content')
    }
  }
  return ''
}
