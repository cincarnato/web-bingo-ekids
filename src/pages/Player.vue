<template>
    <v-container>
        <h2>Bingo Game: <b>{{player.bingo.name}}</b></h2>

        <template v-if="itemsReady">
            <v-row>
                <v-col cols="12" sm="9">
                    <your-bingo-card ></your-bingo-card>
                </v-col>
                <v-col cols="12" sm="3">
                    <bingo-items :items="player.bingo.items"></bingo-items>
                </v-col>
            </v-row>
        </template>
        <pick-card-items v-else></pick-card-items>
        <br>
        <v-divider></v-divider>
        <br>
        <v-btn class="" dark color="purple" @click="refreshBingo">Refresh Bingo</v-btn>
        <v-btn class="float-right" dark color="red" @click="endGame">End Game</v-btn>
    </v-container>
</template>

<script>
    import BingoProvider from "../providers/BingoProvider";
    import {mapGetters} from "vuex"
    import PickCardItems from "../components/PickCardItems";
    import YourBingoCard from "../components/YourBingoCard";
    import BingoItems from "../components/BingoItems";

    export default {
        name: "Player",
        components: {BingoItems, YourBingoCard, PickCardItems},
        computed: {
            ...mapGetters(["player"]),
            itemsReady(){
                console.log(this.player.bingo.cardQtyItems)
                console.log(this.player.card.length)
                if(this.player.bingo.cardQtyItems > this.player.card.length){
                    return false
                }else{
                    return true
                }
            }
        },
        methods: {
            endGame() {
                if (confirm("Esta seguro de terminar el juego")) {
                    this.$store.commit("setPlayer", null)
                    this.$router.push({name: 'home'})
                }
            },
            refreshBingo() {
                BingoProvider.bingo(this.$store.state.player.bingo.id)
                    .then(
                        response => {
                            this.$store.commit('refreshPlayerBingo', response.data.bingo)
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