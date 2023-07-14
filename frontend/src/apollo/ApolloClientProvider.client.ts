import { ApolloClient, InMemoryCache } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'

const isDevelopment = import.meta.env.DEV
const API_ENDPOINT = 'http://localhost:4001/graphql'

const cache = new InMemoryCache()

export const client = new ApolloClient({
  uri: API_ENDPOINT,
  queryDeduplication: true,
  connectToDevTools: isDevelopment,
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
  },
})

if (isDevelopment) {
  loadDevMessages()
  loadErrorMessages()
}
