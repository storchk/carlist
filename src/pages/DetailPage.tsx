import { Navigate, useParams } from 'react-router-dom'
import type { Offer } from 'src/types'

import { client } from '../apollo'
import { Offer as OfferFragment } from '../graphql/fragments/Offer'

export const DetailPage = (): JSX.Element => {
  const { id } = useParams()
  const offer = client.readFragment<Offer>({
    fragment: OfferFragment,
    id: `SearchResultV3Records:${id}`,
  })
  if (!offer) return <Navigate to="/" />
  return <div>{offer.brand}</div>
}
