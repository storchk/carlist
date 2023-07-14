import { Service } from 'typedi'

import type { GraphqlContext } from '../../GraphqlContext'
import { GraphqlCarModel } from '../model/GraphqlCarModel'
import { Offer } from '../../../api/OffersV3'
import { GraphqlCarsModel } from '../model/GraphqlCarsModel'

type Options = {
  limit?: number
  offset?: number
}
@Service()
export class GraphqlCarProvider {
  async getCarById(ctx: GraphqlContext, id: string): Promise<GraphqlCarModel | null> {
    const response = await ctx.dataSources.getOffersV3.getOfferById(id)
    return response ? new GraphqlCarModel(response) : null
  }
  async getCars(ctx: GraphqlContext, { limit, offset }: Options): Promise<GraphqlCarsModel> {
    const response =
      (await ctx.dataSources.getOffersV3.getOffers()).filter((car): car is Offer => !!car) || []
    const cars = [...response]

    if (offset) {
      cars.splice(0, offset)
    }
    if (limit) {
      cars.splice(limit)
    }

    return new GraphqlCarsModel({ items: cars, total: response.length })
  }
}
