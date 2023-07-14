import { Field, ObjectType } from 'type-graphql'
import { Offer } from '../../../api/OffersV3'

@ObjectType('Price', {
  simpleResolvers: true,
})
export class GraphqlPriceModel {
  @Field(() => Number)
  gross: number

  constructor({ consumer_price_gross }: Offer['im_price']) {
    this.gross = consumer_price_gross
  }
}
