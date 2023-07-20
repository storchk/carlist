import styled, { css } from 'styled-components'

import { Badge } from '@/components'
import { mediaQuery } from '@/styles'

export const StyledDetailPage = styled.main(
  ({ theme }) => css`
    position: relative;
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

    section {
      padding: ${theme.spacing.lg};
      background-color: ${theme.colors.contrast0};
      height: fit-content;
    }
  `
)

export const StyledVehicleTypeBadge = styled(Badge)(
  ({ theme }) => css`
    position: absolute;
    top: -${theme.spacing.sm};
    right: -${theme.spacing.sm};
  `
)

export const StyledDetailPageBadges = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing.sm};
    margin: ${theme.spacing.lg} 0;
  `
)

export const StyledPrice = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: baseline;
    gap: ${theme.spacing.sm};
    margin-top: ${theme.spacing.lg};
  `
)
