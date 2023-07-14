export type Media = {
  url: string
}
export type Consumption = {
  unit: string
  consumption_combined: number | null
}

export type Offer = {
  id: string
  brand: string
  model: string
  performance: number
  vehicle_history: {
    reg_date: string | null
  }
  drivetrain: {
    fuel: {
      type: string
    }
    consumption: Consumption
    transmission_type: string
    cc: number | null
  }
  im_price: {
    consumer_price_gross: number
  }
  media: {
    final: Media[]
  }
  technical_features: {
    drive: string | null
  }
  vehicle_type: {
    condition: string
  }
  category: string | null
  color: string | null
}

export type GetOffersV3 = {
  records: Offer[]
}
export type GetOffersV3Response = { getOffersV3: GetOffersV3 }
