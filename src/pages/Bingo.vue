<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="4">
                <v-card>
                    <v-card-text>
                        <bingo-items :enablePlayBtn="true" :items="bingoItems"></bingo-items>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" sm="8">

                <p><b>Game code</b>: <b class="purple--text">{{bingo.code}}</b> (Share this code with the children to join your game)</p>
                <h3>Players</h3>
                <bingo-players :players="bingoPlayers"></bingo-players>
            </v-col>
        </v-row>

        <v-dialog max-width="300" :value="gameEnded">
            <v-btn  dark color="red" @click="endGame">End Game</v-btn>
        </v-dialog>

        <v-divider class="mb-2"></v-divider>

        <v-btn  dark color="red" @click="endGame">End Game</v-btn>
    </v-container>
</template>

<script>
    import {mapGetters, mapActions} from "vuex"
    import BingoItems from "../components/BingoItems";
    import BingoPlayers from "../components/BingoPlayers";

    export default {
        name: "BingoAdmin",
        components: {BingoPlayers, BingoItems},
        computed: {
            ...mapGetters(["bingo", "bingoItems", "bingoPlayers", "gameEnded"])
        },
        mounted() {
            this.loadPlayers()
        },
        methods: {
            ...mapActions(['roll', 'loadPlayers']),
            endGame() {
                if (confirm("Esta seguro de terminar el juego")) {
                    this.$store.commit("setBingo", null)
                    this.$router.push({name: 'home'})
                }
            },

        }
    }
</script>

<style scoped>

</style>