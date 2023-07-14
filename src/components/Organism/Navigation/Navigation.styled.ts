import { mediaQuery } from '../../../styles'
import styled, { css } from 'styled-components'

export const StyledNavigation = styled.nav(
  ({ theme }) => css`
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.colors.secondary};
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;

    > div {
      margin: 0 ${theme.spacing.md};

      ${mediaQuery.lg} {
        margin: 0 ${theme.spacing.xxxxl};
      }

      h1 {
        color: ${theme.colors.primary};
      }
    }
  `
)
