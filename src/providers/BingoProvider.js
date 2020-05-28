import apolloClient from './../apollo-client'


class BingoProvider{

    createBingo(form) {
        return apolloClient.mutate({
            mutation: require('./gql/createBingo.graphql'),
            variables: form
        })
    }
}

export default new BingoProvider