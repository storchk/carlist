import { Field, ObjectType } from 'type-graphql'
import { Offer } from '../../../api/OffersV3'

@ObjectType('Drivetrain', {
  simpleResolvers: true,
})
export class GraphqlDrivetrainModel {
  @Field(() => String, { nullable: true })
  fuel: string | null

  @Field(() => String, { nullable: true })
  consumption: string | null

  @Field(() => String, { nullable: true })
  transmissionType: string | null

  @Field(() => String)
  cc: string

  constructor({ fuel, consumption, transmission_type, cc }: Offer['drivetrain']) {
    this.fuel = getFuelType(fuel)
    this.consumption = consumption.consumption_combined
      ? `${consumption.consumption_combined} ${consumption.unit}`
      : null
    this.transmissionType = getTransmissionByType(transmission_type)
    this.cc = `${cc} ccm`
  }
}

function getFuelType(fuel: Offer['drivetrain']['fuel']) {
  switch (fuel.type) {
    case 'PETROL':
      return 'Benzin'
    case 'DIESEL':
      return 'Diesel'
    case 'ELECTRICITY':
      return 'Elektro'
    case 'HYBRID':
      return 'Hybrid'

    default:
      return null
  }
}

function getTransmissionByType(transmissionType: Offer['drivetrain']['transmission_type']) {
  switch (transmissionType) {
    case 'MANUAL_GEAR':
      return 'Schaltgetriebe'
    case 'AUTOMATIC_GEAR':
      return 'Automatikgetriebe'
    case 'HALFAUTOMATIC_GEAR':
      return 'Halbautomatikgetrieber'

    default:
      return null
  }
}
