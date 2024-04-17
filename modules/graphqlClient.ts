import { GraphQLClient } from 'graphql-request'

export const gqlClient = new GraphQLClient(process.env.HYGRAPH_URL, {
  headers: {
    authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
  }
})
