import React, { useContext } from 'react'
import { NavigationList } from 'components/templates/shared/Header/NavigationList'
import { Icon } from 'components/atoms/Icon'
import { ThemeContext } from 'context/ThemeContext'

export const DesktopHeader: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <NavigationList />
      <div style={{ position: 'fixed', right: 150 }}>
        <Icon
          iconName={`fas fa-${theme === 'light' ? 'sun' : 'moon'}`}
          size="s"
          onClick={toggleTheme}
        />
      </div>
    </>
  )
}
