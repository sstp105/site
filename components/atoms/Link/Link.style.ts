import { css, keyframes } from 'styled-components'

/**
 * Navigation link style
 */
const navLinkStyle = css`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  padding-bottom: 20px;
  position: relative;
  font-size: 18px;
  padding: 20px 0px;
  transition: opacity 0.5s, color 0.5s;

  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.color.primary};
  }

  &:before {
    transition: 0.3s;
    height: 2px;
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.color.primary};
    width: 0%;
    bottom: 10px;
  }

  &:hover:before {
    width: 100%;
  }
`

/**
 * Social media hover animation
 */
const scaleAnimation = keyframes`
 0% {
     left: -110%;
     top: 90%;
 }
 50% {
     left: 10%;
     top: -30%;
 }
 100% {
     top: -10%;
     left: -10%;
 }
`
const socialLinkStyle = css`
  text-align: center;
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  padding: 0;
  border-radius: 30%;
  color: black;

  &::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background: ${(props) => props.theme.color.primary};
    transform: rotate(45deg);
    left: -110%;
    top: 90%;
  }
  &:hover::before {
    animation: ${scaleAnimation} 0.8s 1;
    top: -10%;
    left: -10%;
  }

  & > i {
    line-height: 50px;
    font-size: 24px;
    transition: 0.2s linear;
  }

  &:hover i {
    transform: scale(1.4);
    color: white;
  }
`

export const style = {
  variant: {
    default: null,
    navigation: navLinkStyle,
    social: socialLinkStyle
  }
}
