import { useState } from 'react'
import { GlobalStyle } from 'styles/globalStyle'
import { ThemeContext } from 'context/ThemeContext'
import { Seo } from 'components/templates/shared/Seo'
import { Header } from 'components/templates/shared/Header'
import { Footer } from 'components/templates/shared/Footer'
import styled from 'styled-components'

const StyledToggler = styled.button`
  position: fixed;
  right: 25px;
  top: 100px;
`

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
    <ThemeContext themeMode={themeMode}>
      <GlobalStyle />
      <Seo />
      <StyledToggler onClick={toggleTheme}>Toggle Theme</StyledToggler>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeContext>
  )
}

export default App
