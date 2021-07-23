import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

const getTheme = (mode) => {
  return {
    ...theme,
    color: theme.color[mode]
  }
}

export const Theme = (props) => {
  const { themeMode, children } = props
  const baseTheme = getTheme(themeMode)

  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
}
