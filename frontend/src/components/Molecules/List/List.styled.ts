import styled, { css } from 'styled-components'

import type { StyledListItemProps } from './List.types'

export const StyledList = styled.ul(
  ({ theme }) => css`
    margin: ${theme.spacing.xs} 0;

    li {
      margin-bottom: ${theme.spacing.xxs};
      &:last-child {
        margin-bottom: 0;
      }
    }
  `
)

export const StyledListItem = styled.li<StyledListItemProps>(
  ({ theme, $isDisabled }) => css`
    > * {
      color: ${$isDisabled ? theme.colors.contrast500 : 'inherit'};
    }
  `
)
