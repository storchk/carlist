import { Field, ObjectType } from 'type-graphql'
import { Offer } from '../../../api/OffersV3'

@ObjectType('VehicleHistory', {
  simpleResolvers: true,
})
export class GraphqlVehicleHistoryModel {
  @Field(() => String, { nullable: true })
  registrationDate: string | null

  constructor({ reg_date }: Offer['vehicle_history']) {
    this.registrationDate = reg_date
  }
}
