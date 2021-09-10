import { GlobalStyle } from 'styles/globalStyle'
import { Theme } from 'styles'
import { ThemeContext } from 'context/ThemeContext'
import { Header } from 'components/templates/Header'
import { Footer } from 'components/templates/Footer'
import { useTheme } from 'libs/hooks/useTheme'

const App = ({ Component, pageProps }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme themeMode={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Theme>
    </ThemeContext.Provider>
  )
}

export default App
