import { createContext } from 'react'

export interface NavigationContext {
  _id: string
  title: string
  url: string
  seo: {
    title: string
    description: string
  }
  banner?: string
}

export type Navigation = 'home' | 'project' | 'video' | 'about' | 'blog'

export type INavigationContext = {
  [key in Navigation]: NavigationContext
}

export const NavigationContext = createContext<INavigationContext>(null)
