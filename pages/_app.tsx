import { useState } from 'react'
import { GlobalStyle } from 'styles/globalStyle'
import { Theme } from 'context/Theme'

const App = ({ Component, pageProps }) => {
  const [themeMode, setThemeMode] = useState('light')

  const toggleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark')
    } else {
      setThemeMode('light')
    }
  }

  return (
    <Theme themeMode={themeMode}>
      <GlobalStyle />
      <Component {...pageProps} />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </Theme>
  )
}

export default App
