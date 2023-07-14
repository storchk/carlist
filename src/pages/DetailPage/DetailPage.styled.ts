import styled, { css } from 'styled-components'

import { mediaQuery } from '../../styles'

export const StyledDetailPage = styled.main(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    margin: ${theme.spacing.lg} ${theme.spacing.md};
    row-gap: ${theme.spacing.lg};
    padding-bottom: ${theme.spacing.lg};

    ${mediaQuery.lg} {
      gap: 0 ${theme.spacing.lg};
      grid-template-columns: 1fr 1fr;
      margin: ${theme.spacing.lg} ${theme.spacing.xxxxl};
    }

    aside {
    }
    section {
      padding: ${theme.spacing.lg};
      background-color: ${theme.colors.contrast0};
      height: fit-content;
    }
  `
)

export const StyledDetailPageBadges = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing.sm};
    margin: ${theme.spacing.md} 0;
  `
)
