import { createContext } from 'react'
import { IProfile } from 'types/Profile'

export const ProfileContext = createContext<IProfile>(null)
