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
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      gap: ${theme.spacing.md};
      max-height: 96vh;
      margin-bottom: ${theme.spacing.xxl};
      > * {
        width: calc(50% - ${theme.spacing.sm});

        ${mediaQuery.sm} {
          width: calc(33.333% - ${theme.spacing.sm});
        }
      }

      ${mediaQuery.lg} {
        flex-direction: column;
        position: sticky;
        top: 90px;
        left: 0;
        right: 0;
        z-index: 50;
        width: 25%;
        margin-top: ${theme.spacing.xxl};
        margin-bottom: 0;
        padding-right: ${theme.spacing.lg};
        > * {
          width: 100%;
        }
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
      gap: ${theme.spacing.md};
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    > li {
      width: 100%;

      ${mediaQuery.sm} {
        width: calc(50% - ${theme.spacing.sm});
      }
      ${mediaQuery.md} {
        min-height: 500px;
        width: calc(33.333% - ${theme.spacing.sm});
      }

      margin-bottom: ${theme.spacing.md};
      &:last-child {
        margin-bottom: 0;
      }
    }
  `
)

export const StyledLoadMoreArea = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: ${theme.spacing.xxl} 0;
  `
)
