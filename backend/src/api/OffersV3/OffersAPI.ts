import { RESTDataSource } from 'apollo-datasource-rest'

import { Service } from 'typedi'
import 'reflect-metadata'
import type { Offer } from './OffersAPI.types'
import { offers } from './mock/getOffersV3'

@Service()
export class OffersAPI extends RESTDataSource {
  async getOfferById(id: string): Promise<Offer | null> {
    return offers.getOffersV3.records.find(offer => offer.id === id) || null
  }
  async getOffers(): Promise<Offer[]> {
    return offers.getOffersV3.records || []
  }
}
