import { ApolloServer, ExpressContext } from 'apollo-server-express'
import express = require('express')
import { OffersAPI } from './api/OffersV3'
import { schema } from './schema'

const app = express()

let server: null | ApolloServer<ExpressContext> = null

async function startServer() {
  server = new ApolloServer({
    dataSources: () => ({
      getOffersV3: new OffersAPI(),
    }),
    schema,
    persistedQueries: false,
    introspection: true,
  })
  await server.start()
  server.applyMiddleware({ app })
}

startServer()

app.listen({ port: 4001 }, () =>
  console.log(`🚀 Server ready at http://localhost:4001${server?.graphqlPath}`)
)
