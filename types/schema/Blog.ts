import { IImage } from 'types/shared/Image'

export interface IBlogBase {
  id?: string
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
