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
}

export default new BingoProvider