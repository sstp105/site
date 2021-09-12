import { Icon } from 'components/atoms/Icon'
import { ThemeContext } from 'context/ThemeContext'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import React, { useContext } from 'react'

export const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Icon
      iconName={
        theme === 'light' ? FONTAWESOME_ICONS.sun : FONTAWESOME_ICONS.moon
      }
      size="s"
      onClick={toggleTheme}
    />
  )
}
