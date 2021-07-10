import { css } from 'styled-components'
import { IProps } from 'components/molecules/Gesture/HamburgerMenu/type'

const MenuStyleOne = css<IProps>`
  width: 50px;
  height: 45px;
  transform: rotate(0deg) scale(0.6);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  & > span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  & > span:nth-child(1) {
    top: 0px;
    ${(props) =>
      props.show &&
      css`
        top: 18px;
        width: 0%;
        left: 50%;
      `}
  }
  & > span:nth-child(2) {
    top: 18px;
    ${(props) =>
      props.show &&
      css`
        transform: rotate(45deg);
      `}
  }
  & > span:nth-child(3) {
    top: 18px;
    ${(props) =>
      props.show &&
      css`
        transform: rotate(-45deg);
      `}
  }
  & > span:nth-child(4) {
    top: 36px;
    ${(props) =>
      props.show &&
      css`
        top: 18px;
        width: 0%;
        left: 50%;
      `}
  }
`

export const style = {
  styleOne: MenuStyleOne
}
