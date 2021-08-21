import { IImage } from 'types/Image'

export interface IBlogBase {
  _id?: string
  title: string
  summary: string
  banner: IImage
  tags: Array<string>
  category: string
  lastUpdatedDate: Date
}

export interface IBlog extends IBlogBase {
  content: string
  preview: string
  createdDate: Date
}
