import { GlobalStyle } from 'styles/globalStyle'
import { Theme } from 'styles'
import { ThemeContext } from 'context/ThemeContext'
import { Header } from 'components/templates/Header'
import { Footer } from 'components/templates/Footer'
import { useTheme } from 'libs/hooks/useTheme'
import { NavigationContext } from 'context/NavigationContext'
import { navigation } from 'data/navigation'

const App = ({ Component, pageProps }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <NavigationContext.Provider value={navigation}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Theme themeMode={theme}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Theme>
      </ThemeContext.Provider>
    </NavigationContext.Provider>
  )
}

export default App
