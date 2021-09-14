import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { Theme } from 'styles'

export const renderWithTheme = (component: React.ReactNode): RenderResult => {
  return render(<Theme themeMode="light">{component}</Theme>)
}
