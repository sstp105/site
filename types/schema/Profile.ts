import { FONTAWESOME_ICONS } from 'libs/constants/icons'

export interface IIconText {
  _id?: string
  icon: string
  content: string
}

export interface IImage {
  _id?: string
  url: string
  alt: string
}

export interface ISkill {
  _id?: string
  title: string
  content: string
  image: IImage
}

export interface IExperience {
  _id?: string
  title: string
  company: {
    name: string
    logo: IImage
    location: string
  }
  description: string
  startDate: string
  endDate: string
}

export interface IProfile {
  _id?: string
  firstName: string
  lastName: string
  jobTitle: string
  bio: string
  resumeLink: string
  avatar: IImage
  albums: Array<IImage>
  contacts: Array<IIconText>
  socialMedias: Array<IIconText>
  tools: Array<IIconText>
  skills: Array<ISkill>
  experiences: Array<IExperience>
  lastUpdateDate?: Date
}
