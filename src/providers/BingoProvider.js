import apolloClient from './../apollo-client'


class BingoProvider{

    createBingo(form) {
        return apolloClient.mutate({
            mutation: require('./gql/createBingo.graphql'),
            variables: form
        })
    }

    raffleItem(bingoId) {
        return apolloClient.mutate({
            mutation: require('./gql/raffleItem.graphql'),
            variables: {bingoId}
        })
    }

    joinBingo(form) {
        return apolloClient.mutate({
            mutation: require('./gql/joinBingo.graphql'),
            variables: form
        })
    }

    items() {
        return apolloClient.query({
            query: require('./gql/items.graphql')
        })
    }

    bingo(id) {
        return apolloClient.query({
            query: require('./gql/bingo.graphql'),
            variables: {id}
        })
    }

    pickItem(playerId, itemId) {
        return apolloClient.mutate({
            mutation: require('./gql/pickItem.graphql'),
            variables: {playerId, itemId}
        })
    }
}

export default new BingoProvider