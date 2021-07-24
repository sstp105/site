# Atomic Design

The front-end design uses atomic desgin principle. The folders are structured as

- atoms
- molecules
- organisms
- templates
- pages

For pages, we will leverage the `next.js` page routes so all the pages are under the root folder.

## Atoms

Atoms are the basic build block for the UI. For example, the HTML elements such as `<h1>`, `<button>`... etc.

## Component Folder Structure

```
Button/
├─ Button.component.tsx/
├─ Button.style.ts
├─ Button.test.tsx
├─ Button.type.ts
├─ index.ts
```

### `Button.component.tsx`

The component file is used for destructuring `props` and render the component.

The component should also provide a `defaultProps` for initialized values. In case some props should not be rendered if not passed (e.g. `data-testid`), use `Omit` to filter these optional props.

**Button.component.tsx example**

```tsx
import { Styled } from 'components/atoms/Button/Button.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/atoms/Button/Button.type'

export const Button: React.FC<IProps> = (props) => {
  const { children, startIcon, endIcon, testId, ...themeProps } = props

  return (
    <Styled.ButtonRoot {...themeProps} data-testid={testId}>
      {children}
    </Styled.ButtonRoot>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  variant: 'contained',
  size: 'm',
  fullWidth: false,
  onClick: () => {}
}

Button.defaultProps = defaultProps
```

### `Button.test.tsx`

This project will use `jest` and `testing-library` to run unit tests for components.

Test cases should be grouped with similar reasons. For example, testing if the button element and start icon are rendered in the DOM tree should be one test suite. Then testing the `onClick` event should be a different test suit.

Make sure the test cases are scaleable. Most likely the component props will be changed in the future, and we should think about how to write the test cases without too much factoring in the future. For example, what are some edge cases or failed situations?

**Button.test.tsx example**

> As we need to render JSX/TSX element, the file type has to be `tsx` or `jsx`

```tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Button } from 'components/atoms/Button'

describe('<SearchInput /> component render tests', () => {
  test('should render a default Button component in the document', () => {
    render(
      <ThemeContext themeMode="light">
        <Button testId="submit-button">Submit</Button>
      </ThemeContext>
    )
    const defaultButton = screen.getByTestId('submit-button')
    expect(defaultButton).toBeInTheDocument()
  })
})
```

### `Button.style.ts`

To make sure the component is scaleable and reusable, the style applied to the component should be **as generic as possible**. For example, avoiding margin and position style as these attributes are more layout specific.

All the color, background, border..etc should used the color values from `theme` object. By doing so, we can easily handle the different theme with user's preference.

Other shared styles should also use `theme` instead of hardcoded values to make sure consistency and future modification.

For example, `border-raidus` can have `small`, `medium` and `large`.

**Button.style.ts example**

```ts
import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/atoms/Button/Button.type'

const ButtonRoot = styled.button<Partial<IThemeProps>>`
  // base style
  display: block;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family.gilroy_regular};
  background-color: transparent;
  border: none;
  transition: all ${({ theme }) => theme.animation.duration.normal};

  // variant style
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  ${({ size }) => style.size[size]}
`

const s = css`
  font-size: 16px;
  padding: 8px 30px;
`
const m = css`
  font-size: 18px;
  padding: 12px 20px;
`
const l = css`
  font-size: 20px;
  padding: 16px 50px;
`

const size = { s, m, l }

const style = {
  variant,
  size
}

export const Styled = {
  ButtonRoot
}
```

### `Button.type.ts`

Type file includes all the interfaces and types that the component needed.

- `IThemeProps`: all the theme/style related props. e.g: size, fullWidth
- `IDefaultProps`: optional props for the component, need default values
- `IProps`: required props when declare the component
- `PropsToOmit`: props to omit, mostly used for defaultProps

**Button.type.ts example**

```ts
import { SizeBase } from 'types/Size'

export interface IThemeProps {
  variant: 'contained' | 'outlined' | 'text'
  size: SizeBase
  fullWidth: boolean
}

export interface IDefaultProps extends IThemeProps {
  startIcon: React.ReactNode
  endIcon: React.ReactNode
  onClick: () => void
  testId: string
  className: string
}

export interface IProps extends Partial<IDefaultProps> {
  children: React.ReactNode
}

export type PropsToOmit = 'className' | 'testId'
```

### `index.ts`

`index.ts` will be used to export the component
