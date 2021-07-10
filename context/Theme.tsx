import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

export const Theme = (props) => {
  const { children } = props

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
