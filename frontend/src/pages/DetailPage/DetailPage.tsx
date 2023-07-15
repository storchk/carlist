import { useParams } from 'react-router-dom'

import { useGetCarQuery } from '@/graphql'

import { Badge, Heading, Gallery } from '@/components'

import { StyledDetailPage, StyledDetailPageBadges } from './DetailPage.styled'
import { NotFoundPage } from '../NotFoundPage'
import { ErrorPage } from '../ErrorPage'
import { Loading } from './components/Loading'

export const DetailPage = (): JSX.Element => {
  const { id = '' } = useParams()
  const { data, loading, error } = useGetCarQuery({ variables: { id } })

  if (loading) return <Loading />
  if (!data?.car) return <NotFoundPage />
  if (error) return <ErrorPage error={error} />

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
