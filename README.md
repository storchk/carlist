## Carlist

## tl;dr

The application is a frontend web platform that lists vehicles and provides detailed information about them. Users can view a listing page with vehicle tiles, initially displaying a limited number of vehicles to fit the screen. More vehicles are loaded as the user scrolls (lazy loading). The listing page supports filtering based on URL parameters.

Each vehicle tile on the listing page shows an image, make, model, mileage, first registration, fuel type, power, consumption, and CO2 emissions. Clicking on a vehicle tile opens a product page with additional details, including vehicle information and an image gallery.

## Getting Started

This projects uses [pnpm](https://pnpm.io). It contains two application: `backend` and `frontend`

- Install node modules for backend app: `pnpm install:backend`
- Install node modules for frontend app: `pnpm install:frontend`
- Start backend app: `pnpm start:backend`
- Start frontend app: `pnpm start:frontend`

## Frontend

The frontend app in the `/frontend` directory is a web application. It is responsible for rendering the user interface and communicating with the backend server through GraphQL queries. The app can be started by running `pnpm start:frontend` or `npm run --prefix frontend dev` after installing the necessary node modules with `pnpm install:frontend` or `npm i --prefix frontend`.

### Tech Stack

- [React](https://react.dev/)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Vite](https://vitejs.dev/guide/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Codegen](https://the-guild.dev/graphql/codegen)

### Filter

Cars in the car list can be filtered using query parameters. For example, to filter by brand, you can add the brand parameter to the URL and set its value to the desired brand. For instance, to show only cars of the brand Audi, you can use the following URL:

```
?brand=audi
```

This will filter the car list to show only cars of the brand Audi.
It's also possible to combine filter in the url

```
?brand=audi&color=red
```

This will filter the car list to show only cars of the brand Audi which are red.  
You can filter the car list by the following properties:

- brand
- category
- color
- drivetrain.cc
- drivetrain.consumption
- drivetrain.fuel
- drivetrain.transmissionType
- id
- model
- performance
- price.gross
- technicalFeatures.drive
- vehicleHistory.registrationDate
- vehicleType.condition
  Use these properties to filter the car list according to your preferences.

### Codegen

The frontend application leverages Codegen to automatically generate typed queries, interfaces, and hooks based on the GraphQL schema. This approach ensures type safety and enables seamless integration between the frontend and backend, enhancing the development process and reducing the potential for errors.

- run backend application and execute `pnpm run --prefix frontend codegen` from project root to generate types and operations in `/frontend/src/graphql/__genrated__`

## Backend

The backend app in the `/backend` directory is a Node.js application. It is responsible to serve extracted data from provided [GraphQL Endpoint](https://im-graphql.instamotion.com/) via GraphQL. The app acts as backend-for-frontend layer to collect data and provide a single endpoint to the frontend application. The app can be started by running `pnpm start:backend` or `npm run --prefix backend dev` after installing the necessary node modules with `pnpm install:backend` or `npm i --prefix backend`.

### Tech Stack

- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL](https://graphql.org/)
- [TypeGraphQL](https://typegraphql.com/)
- [Express](https://expressjs.com/de/)
- [TypeScript](https://www.typescriptlang.org/)

### GraphQL

- run backend application `pnpm start:backend` and open [GraphQL Playground](https://studio.apollographql.com/sandbox/explorer)

#### Query to get `cars`:

```javascript
query GetCars($limit: Int, $offset: Int) {
  cars(limit: $limit, offset: $offset) {
    total
    items {
      ... on Car {
        brand
        category
        color
        drivetrain {
          cc
          consumption
          fuel
          transmissionType
        }
        id
        media {
          url
        }
        model
        performance
        price {
          gross
        }
        technicalFeatures {
          drive
        }
        vehicleHistory {
          registrationDate
        }
        vehicleType {
          condition
        }
      }
    }
  }
}
```

Variables

```JSON
{
  "limit": 10,
  "offset": 0,
}
```

#### Query to get a single `car`:

```javascript
query Car($carId: String!) {
  car(id: $carId) {
    ... on Car {
      brand
      category
      color
      drivetrain {
        cc
        consumption
        fuel
        transmissionType
      }
      id
      media {
        url
      }
      model
      performance
      price {
        gross
      }
      technicalFeatures {
        drive
      }
      vehicleHistory {
        registrationDate
      }
      vehicleType {
        condition
      }
    }
  }
}
```

Variables

```JSON
{
  "carId": "d5ae265a-5a44-5e4b-b25b-1b8825072e65",
}
```

## CI

This application utilizes two workflows to validate the backend and frontend TypeScript code, as well as lint errors. These workflows ensure that both the backend and frontend apps are free from errors and adhere to linting standards.
