import { css } from 'styled-components'

export const style = {
  screen: {
    tablet: css`
      transform: translateX(0);
      width: 250px;
      order: -1;
      img {
        width: 250px;
      }
    `,
    mobile: css`
      width: 200px;
      height: 250px;
      img {
        width: 200px;
      }
    `
  }
}
