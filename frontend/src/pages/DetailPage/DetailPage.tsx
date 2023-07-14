import { useParams } from 'react-router-dom'

import { useGetCarQuery } from '@/graphql'

import { Badge } from '../../components/Atoms/Badge'
import { Heading } from '../../components/Atoms/Typography'
import { Gallery } from '../../components/Organism/Gallery'
import { StyledDetailPage, StyledDetailPageBadges } from './DetailPage.styled'

export const DetailPage = (): JSX.Element => {
  const { id = '' } = useParams()
  const { data, loading, error } = useGetCarQuery({ variables: { id } })

  if (loading) return <div>Loading...</div>
  if (!data?.car) return <div>no data</div>
  if (error) return <p>{error.message}</p>

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
