import styled, { css } from 'styled-components'

export const StyledButton = styled.button(
  ({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    border-radius: ${theme.border.radius};
    transition: all 0.5s cubic-bezier(0.2, 0, 0.05, 1);
    background-color: ${theme.colors.primary};
    color: ${theme.colors.contrast0};

    &:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5rem 8px 0px;
      transform: scale(1.02);
    }
  `
)
