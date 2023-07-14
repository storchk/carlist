import styled, { css } from 'styled-components'
import { mediaQuery } from '../../styles'

export const StyledListPage = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${mediaQuery.lg} {
      flex-direction: row;
    }

    margin: ${theme.spacing.lg} ${({ theme }) => theme.spacing.md};

    ${mediaQuery.lg} {
      margin: ${theme.spacing.lg} ${({ theme }) => theme.spacing.xxxxl};
    }

    aside {
      width: 100%;
      max-height: 96vh;
      position: sticky;
      top: 90px;
      left: 0;
      right: 0;
      z-index: 50;

      ${mediaQuery.md} {
        width: 25%;
      }
    }
    section {
      width: 100%;
    }
  `
)

export const StyledCarList = styled.ul(
  ({ theme }) => css`
    margin-top: ${theme.spacing.md};
    display: flex;
    flex-direction: column;

    ${mediaQuery.sm} {
      flex-direction: row;
      gap: ${theme.spacing.sm};
      flex-wrap: wrap;
      justify-content: space-between;
    }

    > li {
      width: 100%;

      ${mediaQuery.sm} {
        width: calc(50% - ${theme.spacing.sm});
      }
      ${mediaQuery.md} {
        width: calc(33.333% - ${theme.spacing.sm});
      }
      margin-bottom: ${theme.spacing.md};
      &:last-child {
        margin-bottom: 0;
      }
    }
  `
)
