import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { ISeo, Seo } from 'components/templates/Seo'
import { Theme } from 'styles'
import { getHead, getMetaName } from 'libs/utils/domHelpers'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    }
  }
})

export const TESTCASE_1: ISeo = {
  title: 'Hey! This is Yang',
  description: 'Person site'
}

describe('Templates: <Seo /> component render tests', () => {
  test('Testcase 1: should render correct seo title and description', async () => {
    render(
      <Theme themeMode="light">
        <Seo {...TESTCASE_1} />
      </Theme>
    )

    await waitFor(() =>
      expect(getMetaName('description')).toEqual(TESTCASE_1.description)
    )
    await waitFor(() => expect(getHead()).toEqual(TESTCASE_1.title))
  })
})
