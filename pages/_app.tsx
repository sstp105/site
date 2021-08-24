import { GlobalStyle } from 'styles/globalStyle'
import { Theme } from 'styles'
import { Seo } from 'components/templates/shared/Seo'
import { Header } from 'components/templates/shared/Header'
import { Footer } from 'components/templates/shared/Footer'
import styled from 'styled-components'
import { useTheme } from 'libs/hooks/useTheme'

const StyledToggler = styled.button`
  position: fixed;
  right: 25px;
  top: 100px;
`

const App = ({ Component, pageProps }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Theme themeMode={theme}>
      <GlobalStyle />
      <Seo />
      <StyledToggler onClick={toggleTheme}>Toggle Theme</StyledToggler>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Theme>
  )
}

export default App
