import { createContext } from 'react'
import { IProfile } from 'types/schema/Profile'
import { IProjectBase } from 'types/schema/Project'
import { IBlogBase } from 'types/schema/Blog'

interface IProfileContext {
  profile: IProfile
  projects: Array<IProjectBase>
  blogs: Array<IBlogBase>
}

export const ProfileContext = createContext<IProfileContext>(null)
