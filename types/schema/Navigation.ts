import { ISeo } from 'components/templates/Seo'
import { IImage } from 'types/shared/Image'

export interface INavigation {
  _id: string
  pathname: string
  title: string
  seo: ISeo
  banner?: {
    _id: string
    image: IImage
    title: string
    subtitle: string
  }
}

export interface IHeaderProps {
  navigation: Array<INavigation>
}
