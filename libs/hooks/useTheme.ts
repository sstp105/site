import { useState, useEffect } from 'react'

export type Themes = 'light' | 'dark'

export const useTheme = () => {
  const [theme, setTheme] = useState<Themes>('light')

  useEffect(() => {
    try {
      const localThemeState = localStorage.getItem('theme') as Themes
      if (localThemeState === null) {
        setTheme('light')
        localStorage.setItem('theme', 'light')
      } else {
        setTheme(localThemeState)
      }
    } catch (error) {
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return { theme, toggleTheme }
}
