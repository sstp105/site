import { GlobalStyle } from 'styles/globalStyle'
import { Theme } from 'styles'
import { ThemeContext } from 'context/ThemeContext'
import { Header } from 'components/templates/Header'
import { Footer } from 'components/templates/Footer'
import { useTheme } from 'libs/hooks/useTheme'
import { useEffect } from 'react'
import { API } from 'libs/config/api'

let navigationCache = null

const App = ({ Component, pageProps, navigationProps }) => {
  useEffect(() => {
    navigationCache = navigationProps
  }, [])

  const { theme, toggleTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme themeMode={theme}>
        <GlobalStyle />
        <Header navigation={navigationProps} />
        <Component {...pageProps} />
        <Footer />
      </Theme>
    </ThemeContext.Provider>
  )
}

App.getInitialProps = async () => {
  if (navigationCache) {
    return {
      navigationProps: navigationCache
    }
  }

  const res = await fetch(API.ROUTES('navigation'), API.HEADERS)
  const navigationData = await res.json()
  navigationCache = navigationData

  return {
    navigationProps: navigationData
  }
}

export default App
