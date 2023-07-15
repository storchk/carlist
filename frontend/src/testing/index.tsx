import type { RenderOptions, RenderResult } from '@testing-library/react'
import * as testingLibrary from '@testing-library/react'
import type { FC, ReactElement } from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { theme as defaultTheme } from '@/theme'

function renderer(tree: ReactElement, theme = defaultTheme) {
  return create(<ThemeProvider theme={theme}>{tree}</ThemeProvider>).toJSON()
}

const withThemeProvider =
  (theme = defaultTheme): FC<{ children: JSX.Element | JSX.Element[] }> =>
  ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }

function renderWithThemeTL(
  tree: ReactElement,
  options: RenderOptions = {},
  theme = defaultTheme
): RenderResult {
  return testingLibrary.render(tree, { wrapper: withThemeProvider(theme), ...options })
}

export const testing = {
  ...testingLibrary,
  render: renderWithThemeTL,
  renderer,
}
