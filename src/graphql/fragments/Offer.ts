import { gql } from "@apollo/client";

export const Offer = gql`
fragment Offer on SearchResultV3Records {
    id
    brand
    model
    performance
    vehicle_history {
      reg_date
    }
    drivetrain {
      fuel {
        type
      }
      consumption {
        unit
        consumption_combined
      }
      transmission_type
      cc
    }
    im_price {
      consumer_price_gross
    }
    media {
      final {
        url
      }
    }
    technical_features {
      drive
    }
    vehicle_type {
      condition
    }
    category
    color
}
`