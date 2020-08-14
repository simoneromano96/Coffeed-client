// import { GraphQLClient } from "graphql-request"
import { GRAPHQL_ENDPOINT } from "./configuration"
import { Chain } from "../graphql/graphql-zeus"

// class GraphClient {
//   private client: GraphQLClient
//
//   constructor() {
//     this.client = new GraphQLClient(GRAPHQL_ENDPOINT, { headers: {} })
//   }
//
//   // Getters
//   getClient = (): GraphQLClient => this.client
// }
//
// export const client = new GraphClient().getClient()

const client = Chain(GRAPHQL_ENDPOINT)

export { client }
export default client
