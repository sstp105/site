import styled, { css } from 'styled-components'

// Timeline container
export const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  // Center line
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    width: 1px;
    height: 100%;
    background: #c5c5c5;
  }

  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
  }

  ${(props) => props.theme.media.tablet} {
    padding-bottom: 0;
    &:before {
      left: 20px;
      height: 100%;
    }
  }
`

// Timeline item block
export const TimelineItem = styled.li<{ float: 'left' | 'right' }>`
  list-style: none;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
  margin-bottom: 20px;
  clear: both;

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 24px;
    background: ${(props) => props.theme.color.background_primary};
    border-radius: 50%;
  }

  ${(props) =>
    props.float === 'left' &&
    css`
      float: left;
      text-align: right;
      &:before {
        right: -6px;
      }
    `}

  ${(props) =>
    props.float === 'right' &&
    css`
      float: right;
      text-align: left;
      &:before {
        left: -4px;
      }
    `}

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    text-align: left;
    padding-left: 50px;
    padding-bottom: 50px;

    &:before {
      top: -18px;
      left: 16px;
    }
  }
`

// Timeline content: title, company, desc...
export const Content = styled.div<{ float: 'left' | 'right' }>`
  padding: 20px;
  position: relative;
  background: ${(props) => props.theme.color.surface_variant};
  border-radius: 10px;

  &:after {
    content: '';
    position: absolute;
    top: 15%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    margin-top: -8px;
    border-top: 0;

    ${(props) =>
      props.float === 'left' &&
      css`
        right: 0;
        border-left-color: ${(props) => props.theme.color.surface_variant};
        border-right: 0;
        margin-right: -16px;
      `}

    ${(props) =>
      props.float === 'right' &&
      css`
        left: 0;
        border-right-color: ${(props) => props.theme.color.surface_variant};
        border-left: 0;
        margin-left: -16px;
      `}

    ${(props) => props.theme.media.tablet} {
      display: none;
    }
  }
`

// Timeline date
export const Date = styled.div<{ float: 'left' | 'right' }>`
  position: absolute;
  top: 19px;
  padding: 8px 16px;
  background: ${(props) => props.theme.color.background_primary};
  border-radius: 18px;

  ${(props) =>
    props.float === 'left' &&
    css`
      right: -163px;
    `}

  ${(props) =>
    props.float === 'right' &&
    css`
      left: -163px;
    `}

${(props) => props.theme.media.tablet} {
    top: -30px;
    left: 50px;
    right: inherit;
  }
`

export const Styled = {
  Timeline,
  TimelineItem,
  Content,
  Date
}
