import { Heading, Typography } from '@/components'

import { StyledErrorPage } from './ErrorPage.styled'
import type { ErrorPageProps } from './ErrorPage.types'

export const ErrorPage = ({ error }: ErrorPageProps): JSX.Element | null => {
  const { graphQLErrors, networkError } = error

  return (
    <StyledErrorPage>
      <Heading tag="h2">Da ist wohl ein Fehler aufgetreten</Heading>
      {graphQLErrors && graphQLErrors.length > 0 ? (
        <div>
          {graphQLErrors.map((err, i) => {
            return (
              <div key={i}>
                <Typography fontSize={{ mobile: 'sm' }}>{err.message}</Typography>
              </div>
            )
          })}
        </div>
      ) : null}
      {networkError ? (
        <Typography fontSize={{ mobile: 'sm' }}>{networkError.message}</Typography>
      ) : null}
    </StyledErrorPage>
  )
}
