import { Link } from 'react-router-dom'

import { Button, Heading } from '@/components'

import { StyledNotFoundPage } from './NotFoundPage.styled'

export const NotFoundPage = (): JSX.Element => {
  return (
    <StyledNotFoundPage>
      <Heading tag="h2">404 | Page not found</Heading>
      <Link to="/">
        <Button label="Zu den Autos" />
      </Link>
    </StyledNotFoundPage>
  )
}
