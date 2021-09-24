import { IImage } from 'types/shared/Image'

export interface IVideo {
  _id: string
  title: string
  category: string
  banner: IImage
  description: string
  tags: Array<string>
  url: string
  publishedDate: Date
  thumbsUp: number
  music: {
    cover: IImage
    title: string
    artist: string
  }
}
