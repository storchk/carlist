import { Service } from 'typedi'

import type { GraphqlContext } from '../../GraphqlContext'
import { GraphqlCarModel } from '../model/GraphqlCarModel'
import { Offer } from '../../../api/OffersV3'

@Service()
export class GraphqlCarProvider {
  async getCarById(ctx: GraphqlContext, id: string): Promise<GraphqlCarModel | null> {
    const response = await ctx.dataSources.getOffersV3.getOfferById(id)
    return response ? new GraphqlCarModel(response) : null
  }
  async getCars(ctx: GraphqlContext): Promise<GraphqlCarModel[]> {
    const response =
      (await ctx.dataSources.getOffersV3.getOffers()).filter((car): car is Offer => !!car) || []
    return response.map(car => new GraphqlCarModel(car))
  }
}
