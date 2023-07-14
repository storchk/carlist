import { Heading } from '../../Atoms/Typography'
import { StyledNavigation } from './Navigation.styled'
import { useNavigate } from 'react-router-dom'
export const Navigation = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <StyledNavigation>
      <div onClick={() => navigate('/')}>
        <Heading tag="h1">Car List</Heading>
      </div>
    </StyledNavigation>
  )
}
