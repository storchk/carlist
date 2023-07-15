import styled, { css } from 'styled-components'

import { mediaQuery } from '@/styles'

export const StyledNotFoundPage = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: ${theme.spacing.lg} ${theme.spacing.md};
    gap: ${theme.spacing.lg};

    ${mediaQuery.lg} {
      margin: ${theme.spacing.lg} ${theme.spacing.xxxxl};
    }
  `
)
