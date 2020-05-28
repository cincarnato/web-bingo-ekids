<template>
    <v-container>
        <h2>Bingo Game: <b>{{player.bingo.name}}</b></h2>

        <v-btn class="float-right" dark color="red" @click="endGame">End Game</v-btn>
    </v-container>
</template>

<script>
    import BingoProvider from "../providers/BingoProvider";
    import {mapGetters} from "vuex"

    export default {
        name: "Player",
        computed: {
            ...mapGetters(["player"])
        },
        methods: {
            endGame() {
                if (confirm("Esta seguro de terminar el juego")) {
                    this.$store.commit("setPlayer", null)
                    this.$router.push({name: 'home'})
                }
            },
            roll() {
                BingoProvider.raffleItem(this.$store.state.bingo.id)
                    .then(
                        response => {
                            this.$store.commit('addBingoItem', response.data.raffleItem)
                        }
                    )
                    .catch(
                        err => {
                            console.error(err)
                        }
                    )

            }
        }
    }
</script>

<style scoped>

</style>