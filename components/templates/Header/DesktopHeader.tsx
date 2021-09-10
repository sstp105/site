import React from 'react'
import { NavigationList } from 'components/templates/Header/NavigationList'
import { ThemeToggler } from 'components/molecules/ThemeToggler'

export const DesktopHeader: React.FC = () => {
  return (
    <>
      <NavigationList />
      <div style={{ position: 'fixed', right: 50 }}>
        <ThemeToggler />
      </div>
    </>
  )
}
