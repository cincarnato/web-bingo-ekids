<template>
    <v-container>
        <br>
        <template v-if="itemsReady">
            <v-row>
                <v-col cols="12" sm="9">
                    <your-bingo-card ></your-bingo-card>
                </v-col>
                <v-col cols="12" sm="3">
                    <bingo-items :items="playerBingoItems"></bingo-items>
                </v-col>
            </v-row>

        </template>
        <pick-card-items v-else></pick-card-items>
        <v-divider class="mb-2"></v-divider>

        <v-btn v-if="false" dark color="purple" @click="refreshBingo">Refresh Bingo</v-btn>
        <v-btn dark color="red" @click="endGame">End Game</v-btn>
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
            ...mapGetters(["player", "playerBingoItems"]),

            itemsReady(){
                if(this.player.bingo.cardQtyItems > this.player.card.length){
                    return false
                }else{
                    return true
                }
            }
        },
        mounted() {
            this.subscriptionBingo()
        },
        methods: {
            endGame() {
                if (confirm("Esta seguro de terminar el juego")) {
                    this.$store.commit("setPlayer", null)
                    this.$router.push({name: 'home'})
                }
            },
            subscriptionBingo() {
                BingoProvider.itemAdded(this.$store.state.player.bingo.id).subscribe(e => {
                    this.$store.commit('addPlayerBingoItem', e.data.itemAdded)
                    this.play(e.data.itemAdded)
                })
            },
            play(item){
                let snd = process.env.VUE_APP_APIHOST + item.snd
                let audio = new Audio(snd);
                audio.play();
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