import type { ThemeType } from './theme'

declare module '*.woff'
declare module '*.woff2'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
