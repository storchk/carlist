import { createGlobalStyle } from 'styled-components'
import { styledCssReset } from './cssReset'

export const GlobalStyles = createGlobalStyle`
  ${styledCssReset}

  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'PT Sans', sans-serif;
  }
`
