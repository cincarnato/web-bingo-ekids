<template>
    <v-container>
        <h2>Bingo Game</h2>
        <br>
        <h4>Your game code is: <b class="purple--text">{{bingo.code}}</b></h4>
        <p>Share this code with the children to join your game</p>

        <v-btn fab dark color="blue" @click="roll">Roll</v-btn>
        <br>

        <v-row>
            <v-col cols="12" sm="4">
                <v-card>
                    <v-card-title>Items</v-card-title>
                    <v-card-text>

                        <bingo-items :items="bingoItems"></bingo-items>

                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" sm="8">
Players
            </v-col>
        </v-row>

        <br>
        <v-divider></v-divider>
        <br>

        <v-btn class="float-right" dark color="red" @click="endGame">End Game</v-btn>
    </v-container>
</template>

<script>
    import BingoProvider from "../providers/BingoProvider";
    import {mapGetters} from "vuex"
    import BingoItems from "../components/BingoItems";

    export default {
        name: "BingoAdmin",
        components: {BingoItems},
        computed: {
            ...mapGetters(["bingo", "bingoItems"])
        },
        methods: {
            endGame() {
                if (confirm("Esta seguro de terminar el juego")) {
                    this.$store.commit("setBingo", null)
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