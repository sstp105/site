import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

export const Theme = (props) => {
  const getTheme = (mode) => {
    return {
      ...theme,
      color: theme.color[mode]
    }
  }

  const { children } = props
  const [themeState, setTheme] = useState('light')

  const baseTheme = getTheme(themeState)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
