import { IImage } from 'types/Image'

export interface ISectionOverview {
  _id?: string
  title?: string
  contents: Array<string>
}

export interface IFeature {
  _id?: string
  title: string
  features: Array<ISectionOverview>
  previews: Array<IImage>
}

export interface IProjectBase {
  _id?: string
  title: string
  category: string
  banner: IImage
  description: string
  tags: Array<string>
  url: string
}

export interface IProject extends IProjectBase {
  images: Array<IImage>
  features: Array<IFeature>
}
