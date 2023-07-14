import { Navigate, useParams } from 'react-router-dom'

import { Badge } from '../../components/Atoms/Badge'
import { Heading } from '../../components/Atoms/Typography'
import { Gallery } from '../../components/Organism/Gallery'
import { useGetCarQuery } from '@/graphql'
import { StyledDetailPage, StyledDetailPageBadges } from './DetailPage.styled'

export const DetailPage = (): JSX.Element => {
  const { id = '' } = useParams()
  const { data } = useGetCarQuery({ variables: { id } })
  if (!data?.car) return <Navigate to="/" />
  const { brand, model, drivetrain, performance, media } = data.car

  return (
    <StyledDetailPage>
      <aside>
        <Gallery images={media.map(media => media.url)} />
      </aside>
      <section>
        <Heading tag="h2" fontWeight="bold">
          {brand} {model}
        </Heading>

        <StyledDetailPageBadges>
          {drivetrain.fuel ? <Badge label={drivetrain.fuel} /> : null}
          {performance ? <Badge label={`${performance} PS`} /> : null}
          {drivetrain.transmissionType ? <Badge label={drivetrain.transmissionType} /> : null}
          {drivetrain.consumption ? <Badge label={drivetrain.consumption} /> : null}
        </StyledDetailPageBadges>
      </section>
    </StyledDetailPage>
  )
}
