<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="8">
                <v-card color="purple lighten-4">
                    <v-card-title>Choose your items</v-card-title>
                    <v-card-subtitle>Elige tus items para tu carton de bingo</v-card-subtitle>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="3" md="3" v-for="(item,index) in items" :key="index">
                                <item @click="pickItem" :item="item"></item>
                            </v-col>
                        </v-row>


                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card color="light-green lighten-4">
                    <v-card-title>Your Bingo Card</v-card-title>
                    <v-card-subtitle>Tu carton de Bingo</v-card-subtitle>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="6" v-for="(item,index) in player.card" :key="index">
                                <item  :item="item"></item>
                            </v-col>
                        </v-row>

                    </v-card-text>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import BingoProvider from "../providers/BingoProvider";
    import Item from "./Item";
    import {mapGetters} from "vuex"
    export default {
        name: "PickCardItems",
        components: {Item},
        computed: {
            ...mapGetters(["player"]),
        },
        data(){
            return {
                items: []
            }
        },
        mounted() {
            this.loadItems()
        },
        methods: {
            loadItems(){
                BingoProvider.items().then(resp => {
                    console.log(resp)
                    this.items = resp.data.items
                }).catch(err => {
                    console.error(err)
                })
            },
            pickItem(item) {
                BingoProvider.pickItem(this.$store.state.player.id, item.id)
                    .then(
                        response => {
                            this.$store.commit('addPlayerItem', response.data.pickItem)
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