import { Field, ObjectType } from 'type-graphql'
import { Offer } from '../../../api/OffersV3'

@ObjectType('VehicleType', {
  simpleResolvers: true,
})
export class GraphqlVehicleTypeModel {
  @Field(() => String)
  condition: string

  constructor({ condition }: Offer['vehicle_type']) {
    this.condition = condition
  }
}
