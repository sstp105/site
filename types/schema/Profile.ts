import { FONTAWESOME_ICONS } from 'libs/constants/icons'

export interface IIconText {
  id?: string
  icon: string
  content: string
}

export interface IImage {
  id?: string
  url: string
  alt: string
}

export interface ISkill {
  id?: string
  title: string
  content: string
  image: IImage
}

export interface IExperience {
  id?: string
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
  id?: string
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
