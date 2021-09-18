import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy-Thin';
    src: url('fonts/Gilroy-Thin.woff2') format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-UltraLight';
    src: url('fonts/Gilroy-UltraLight.woff2') format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-Light';
    src: url('fonts/Gilroy-Light.woff2') format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-Regular';
    src: url('../fonts/Gilroy-Regular.woff2') format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-Medium';
    src: url('fonts/Gilroy-Medium.woff2') format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gilroy-SemiBold';
    src: url('fonts/Gilroy-SemiBold.woff2') format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Menlo-Regular';
    src: url('fonts/Menlo-Regular.woff2') format()('woff2');
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
