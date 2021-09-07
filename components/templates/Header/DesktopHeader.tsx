import React, { useContext } from 'react'
import { NavigationList } from 'components/templates/Header/NavigationList'
import { Icon } from 'components/atoms/Icon'
import { ThemeContext } from 'context/ThemeContext'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'

export const DesktopHeader: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <NavigationList />
      <div style={{ position: 'fixed', right: 50 }}>
        <Icon
          iconName={
            theme === 'light' ? FONTAWESOME_ICONS.sun : FONTAWESOME_ICONS.moon
          }
          size="s"
          onClick={toggleTheme}
        />
      </div>
    </>
  )
}
