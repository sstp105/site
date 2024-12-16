import { ISeo } from 'components/templates/Seo'
import { IImage } from 'types/shared/Image'

export interface INavigation {
  id: string
  pathname: string
  title: string
  seo: ISeo
  banner?: {
    id: string
    image: IImage
    title: string
    subtitle: string
  }
}

export interface IHeaderProps {
  navigation: Array<INavigation>
}
