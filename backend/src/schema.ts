import { buildSchemaSync } from 'type-graphql'

import { GraphqlCarResolver } from './graphql/Car/resolver/GraphqlCarResolver'

export const schema = buildSchemaSync({
  resolvers: [GraphqlCarResolver],
  nullableByDefault: false,
})
