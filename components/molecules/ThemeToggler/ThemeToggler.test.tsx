import React from 'react'
import { renderWithTheme } from 'libs/utils/renderWithTheme'
import { screen, fireEvent } from '@testing-library/dom'
import { ThemeToggler } from 'components/molecules/ThemeToggler'
import { render } from '@testing-library/react'
import { useTheme } from 'libs/hooks/useTheme'
import { ThemeContext } from 'context/ThemeContext'
import { Theme } from 'styles'
import { act, renderHook } from '@testing-library/react-hooks'

describe('Molecules: <ThemeToggler /> component render tests', () => {
  test('Test case 1: should be able to change the theme in localStorage', () => {
    const { result } = renderHook(() => useTheme())

    const theme = result.current.theme
    const toggleTheme = result.current.toggleTheme

    render(
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Theme themeMode={theme}>
          <ThemeToggler />
        </Theme>
      </ThemeContext.Provider>
    )

    const themeButton = document.querySelector('i')

    act(() => {
      fireEvent.click(themeButton)
    })

    expect(localStorage.__STORE__['theme']).toBe('dark')
  })
})
