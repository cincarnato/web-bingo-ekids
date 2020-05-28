import ApolloClient from 'apollo-boost';


// Create the apollo client
const apolloClient = new ApolloClient({
    uri:  (process.env.VUE_APP_APIHOST?process.env.VUE_APP_APIHOST:'http://localhost:4000') + '/graphql/',

})


export default apolloClient
