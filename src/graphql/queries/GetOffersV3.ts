import { gql } from '@apollo/client'

import { Offer } from '../fragments/Offer'
export const getOffers = gql`
  query getOffers($q: JSON!) {
    getOffersV3(q: $q) {
      records {
        ...Offer
      }
    }
  }
  ${Offer}
`
