import type { OffersAPI } from '../api/OffersV3'

export interface GraphqlContext {
  dataSources: {
    getOffersV3: OffersAPI
  }
}
