import { useParams, Navigate } from 'react-router-dom'
import { client } from '../apollo'
import { Offer as OfferFragment } from '../graphql/fragments/Offer'
import type { Offer } from 'src/types'

export const DetailPage = (): JSX.Element => {
  const { id } = useParams()
  const offer = client.readFragment<Offer>({
    fragment: OfferFragment,
    id: `SearchResultV3Records:${id}`,
  })
  if (!offer) return <Navigate to="/" />
  return <div>{offer.brand}</div>
}
