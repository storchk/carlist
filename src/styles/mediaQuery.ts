import { breakpoints } from './breakpoints'
const { smScreen, mdScreen, lgScreen, xlScreen, xxlScreen } = breakpoints

const customMediaQuery = (breakpoint: number) => `@media (min-width: ${breakpoint}px)`

export const mediaQuery: { [key: string]: string } = {
  sm: customMediaQuery(smScreen),
  md: customMediaQuery(mdScreen),
  lg: customMediaQuery(lgScreen),
  xl: customMediaQuery(xlScreen),
  xxl: customMediaQuery(xxlScreen),
}
