import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy-Light';
    src: url('fonts/Gilroy-Light.eot');
    src: url('fonts/Gilroy-Light.woff2') format('woff2'),
         url('fonts/Gilroy-Light.woff') format('woff'),
         url('fonts/Gilroy-Light.otf') format('opentype'),
         url('fonts/Gilroy-Light.ttf') format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-Regular';
    src: url('fonts/Gilroy-Regular.eot');
    src: url('fonts/Gilroy-Regular.woff2') format('woff2'),
         url('fonts/Gilroy-Regular.woff') format('woff'),
         url('fonts/Gilroy-Regular.otf') format('opentype'),
         url('fonts/Gilroy-Regular.ttf') format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-Medium';
    src: url('fonts/Gilroy-Medium.eot');
    src: url('fonts/Gilroy-Medium.woff2') format('woff2'),
         url('fonts/Gilroy-Medium.woff') format('woff'),
         url('fonts/Gilroy-Medium.otf') format('opentype'),
         url('fonts/Gilroy-Medium.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Menlo-Regular';
    src: url('fonts/Menlo-Regular.eot');
    src: url('fonts/Menlo-Regular.woff2') format('woff2'),
         url('fonts/Menlo-Regular.woff') format('woff'),
         url('fonts/Menlo-Regular.otf') format('opentype'),
         url('fonts/Menlo-Regular.ttf') format('truetype');
    font-style: swap;
  }
  @font-face {
    font-family: system;
    font-style: normal;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }

  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    transition: all ${({ theme }) => theme.animation.duration.normal};
  }

  body {
    background-color: ${({ theme }) => theme.color.background};
    font-family: Gilroy-Regular, "system";
  }

  body::-webkit-scrollbar {
    display: none;
  }
`
