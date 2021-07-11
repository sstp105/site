import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy-Thin';
    src: url('static/fonts/Gilroy-Thin.otf') format('opentype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-UltraLight';
    src: url('static/fonts/Gilroy-UltraLight.otf') format('opentype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-Light';
    src: url('static/fonts/Gilroy-Light.otf') format('opentype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-Regular';
    src: url('static/fonts/Gilroy-Regular.otf') format('opentype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-Medium';
    src: url('static/fonts/Gilroy-Medium.woff') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-SemiBold';
    src: url('static/fonts/Gilroy-SemiBold.woff') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: system;
    font-style: normal;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: white;
    font-family: Gilroy-Regular, "system";
  }
`
