import { Field, ID, ObjectType } from 'type-graphql'
import { Offer } from '../../../api/OffersV3'
import { GraphqlMediaModel } from '../../common/Media/GraphqlMediaModel'
import { GraphqlDrivetrainModel } from '../../common/Drivetrain/GraphqlDrivetrainModel'
import { GraphqlPriceModel } from '../../common/Price/GraphqlPriceModel'
import { GraphqlVehicleTypeModel } from '../../common/VehicleType/GraphqlVehicleTypeModel'
import { GraphqlVehicleHistoryModel } from '../../common/VehicleHistory/GraphqlVehicleHistoryModel'
import { GraphqlTechnicalFeaturesModel } from '../../common/TechnicalFeatures/GraphqlTechnicalFeaturesModel'

@ObjectType('Car', {
  simpleResolvers: true,
  description: 'Gets information about a single car',
})
export class GraphqlCarModel {
  @Field(() => ID)
  id: string

  @Field(() => String)
  brand: string

  @Field(() => String)
  model: string

  @Field(() => [GraphqlMediaModel])
  media: GraphqlMediaModel[]

  @Field(() => String)
  performance: string

  @Field(() => String, { nullable: true })
  color: string | null

  @Field(() => String, { nullable: true })
  category: string | null

  @Field(() => GraphqlDrivetrainModel)
  drivetrain: GraphqlDrivetrainModel

  @Field(() => GraphqlPriceModel)
  price: GraphqlPriceModel

  @Field(() => GraphqlVehicleTypeModel)
  vehicleType: GraphqlVehicleTypeModel

  @Field(() => GraphqlVehicleHistoryModel)
  vehicleHistory: GraphqlVehicleHistoryModel

  @Field(() => GraphqlTechnicalFeaturesModel)
  technicalFeatures: GraphqlTechnicalFeaturesModel

  constructor({
    id,
    brand,
    model,
    media,
    performance,
    color,
    drivetrain,
    im_price,
    technical_features,
    vehicle_history,
    vehicle_type,
    category,
  }: Offer) {
    this.id = id
    this.brand = brand
    this.model = model
    this.media = media.final.map(({ url }) => new GraphqlMediaModel(url))
    this.performance = `${performance} PS`
    this.color = color
    this.category = category
    this.drivetrain = new GraphqlDrivetrainModel(drivetrain)
    this.price = new GraphqlPriceModel(im_price)
    this.vehicleType = new GraphqlVehicleTypeModel(vehicle_type)
    this.vehicleHistory = new GraphqlVehicleHistoryModel(vehicle_history)
    this.technicalFeatures = new GraphqlTechnicalFeaturesModel(technical_features)
  }
}
