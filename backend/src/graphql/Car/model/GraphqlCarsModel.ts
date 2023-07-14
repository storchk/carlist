import { Field, Int, ObjectType } from 'type-graphql'
import { Offer } from '../../../api/OffersV3'

import { GraphqlCarModel } from './GraphqlCarModel'

@ObjectType('Cars', {
  simpleResolvers: true,
})
export class GraphqlCarsModel {
  @Field(() => Int)
  total: number

  @Field(() => [GraphqlCarModel])
  items: GraphqlCarModel[]

  constructor({ items, total }: { items: Offer[]; total: number }) {
    this.items = items.map(item => new GraphqlCarModel(item))
    this.total = total
  }
}
