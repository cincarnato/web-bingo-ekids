import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// New Imports
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

let api_uri = process.env.VUE_APP_APIHOST?process.env.VUE_APP_APIHOST + '/graphql':'http://localhost:4000/graphql'
let ws_uri = process.env.VUE_APP_WSHOST?process.env.VUE_APP_WSHOST + '/graphql':'ws://localhost:4000/graphql'


const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: api_uri,
})

// Create the subscription websocket link
const wsLink = new WebSocketLink({
    uri: ws_uri,
    options: {
        reconnect: true,
    },
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
    // split based on operation type
    ({ query }) => {
        const definition = getMainDefinition(query)
        return definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
    },
    wsLink,
    httpLink
)

// Create the apollo client
const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

export default apolloClient
