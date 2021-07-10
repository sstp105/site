import { GlobalStyle } from 'styles/globalStyle'
import { Theme } from 'context/Theme'

const App = ({ Component, pageProps }) => {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  )
}

export default App
