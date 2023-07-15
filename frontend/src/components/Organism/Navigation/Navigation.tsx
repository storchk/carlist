import { Link } from 'react-router-dom'

import { Heading } from '../../Atoms/Typography'
import { StyledNavigation } from './Navigation.styled'
export const Navigation = (): JSX.Element => {
  return (
    <StyledNavigation>
      <Link to="/">
        <Heading tag="h1">Car List</Heading>
      </Link>
    </StyledNavigation>
  )
}
