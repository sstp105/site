import { css } from 'styled-components'

export const BlogStyle = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  code,
  li {
    color: ${(props) => props.theme.color.typography};
    code {
      background-color: ${(props) => props.theme.color.surface};
      border-radius: 6px;
      padding: 5px 8px;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.primary};
  }

  blockquote {
    border-left: 6px solid ${(props) => props.theme.color.surface};
    padding: 0 15px;
  }

  h1,
  h2 {
    border-bottom: 1px solid ${(props) => props.theme.color.border_base};
    padding-bottom: 7px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
  }

  /* 列表 */
  ol,
  ul {
    padding-left: 2em;
  }

  /* 边距 */
  blockquote,
  details,
  dl,
  ol,
  p,
  pre,
  table,
  ul {
    margin-bottom: 16px;
    margin-top: 0;
  }

  li {
    margin-bottom: 5px;
  }

  /* 代码块 */
  code,
  pre {
    font-family: ${(props) => props.theme.font.family.menlo_regular};
    font-size: 13px;
  }

  pre {
    background-color: ${(props) => props.theme.color.surface};
    border-radius: 6px;
    line-height: 1.45;
    overflow: auto;
  }

  ${(props) => props.theme.color.code_blocks}
`
