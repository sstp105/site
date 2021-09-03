import { IImage } from 'types/shared/Image'

export interface IVideo {
  _id?: string
  title: string
  banner: IImage
  url: string
}
