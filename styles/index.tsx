import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { light_color } from 'styles/theme/color/light'
import { dark_color } from 'styles/theme/color/dark'
import { Themes } from 'libs/hooks/useTheme'

const getTheme = (mode: Themes) => {
  return {
    ...theme,
    color: mode === 'light' ? light_color : dark_color
  }
}

interface ThemeProps {
  themeMode: Themes
  children: React.ReactNode
}

export const Theme: React.FC<ThemeProps> = (props) => {
  const { themeMode, children } = props
  const appTheme = getTheme(themeMode)

  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
}
