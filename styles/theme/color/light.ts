import { css, FlattenSimpleInterpolation } from 'styled-components'

export const code_light: FlattenSimpleInterpolation = css`
  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }
  code.hljs {
    padding: 3px 5px;
  } /*!
  Theme: StackOverflow Light
  Description: Light theme as used on stackoverflow.com
  Author: stackoverflow.com
  Maintainer: @Hirse
  Website: https://github.com/StackExchange/Stacks
  License: MIT
  Updated: 2021-05-15

  Updated for @stackoverflow/stacks v0.64.0
  Code Blocks: /blob/v0.64.0/lib/css/components/_stacks-code-blocks.less
  Colors: /blob/v0.64.0/lib/css/exports/_stacks-constants-colors.less
*/
  .hljs {
    color: #2f3337;
    background: #f6f6f6;
  }
  .hljs-subst {
    color: #2f3337;
  }
  .hljs-comment {
    color: #656e77;
  }
  .hljs-attr,
  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-section,
  .hljs-selector-tag {
    color: #015692;
  }
  .hljs-attribute {
    color: #803378;
  }
  .hljs-name,
  .hljs-number,
  .hljs-quote,
  .hljs-selector-id,
  .hljs-template-tag,
  .hljs-type {
    color: #b75501;
  }
  .hljs-selector-class {
    color: #015692;
  }
  .hljs-link,
  .hljs-regexp,
  .hljs-selector-attr,
  .hljs-string,
  .hljs-symbol,
  .hljs-template-variable,
  .hljs-variable {
    color: #54790d;
  }
  .hljs-meta,
  .hljs-selector-pseudo {
    color: #015692;
  }
  .hljs-built_in,
  .hljs-literal,
  .hljs-title {
    color: #b75501;
  }
  .hljs-bullet,
  .hljs-code {
    color: #535a60;
  }
  .hljs-meta .hljs-string {
    color: #54790d;
  }
  .hljs-deletion {
    color: #c02d2e;
  }
  .hljs-addition {
    color: #2f6f44;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: 700;
  }
`

export const light_color = {
  default: '#464646',
  primary: '#1190F5',
  secondary: '#FFFFFF',
  background: '#FFFFFF',
  background_primary: '#BBE4F9',
  icon: '#464646',
  headline: '#242424',
  typography: '#464646',
  caption: '#A7A7A7',
  surface: '#F7F7F7',
  surface_shadow: '#FFFFFF',
  surface_variant: '#ECF7FD',
  overlay: '#0000008A',
  link: '#464646',
  border_base: '#CCCCCC',
  border_primary: '#1190F5',
  action: '#1190F5',
  error: '#B00020',
  diabled: '#A7A7A7',
  box_shadow: 'rgb(115 127 143 / 16%) 0px 6px 16px;',
  code_blocks: code_light
}
