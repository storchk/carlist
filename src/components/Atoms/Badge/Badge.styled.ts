import styled, { css } from 'styled-components'

export const StyledBadge = styled.span(
  ({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    background-color: ${theme.colors.contrast200};
    color: ${theme.colors.contrast700};
    border-radius: ${theme.spacing.sm};
  `
)
