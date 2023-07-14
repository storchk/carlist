import { Field, ObjectType } from 'type-graphql'
import { Offer } from '../../../api/OffersV3'

@ObjectType('TechnicalFeatures', {
  simpleResolvers: true,
})
export class GraphqlTechnicalFeaturesModel {
  @Field(() => String, { nullable: true })
  drive: string | null

  constructor({ drive }: Offer['technical_features']) {
    this.drive = drive
  }
}
