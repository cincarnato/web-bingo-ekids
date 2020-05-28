<template>
    <v-card color="light-green lighten-4">
        <v-card-title>Your Bingo Card</v-card-title>
        <v-card-subtitle>Tu carton de Bingo</v-card-subtitle>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="3" v-for="(item,index) in player.card" :key="index">
                    <item :hit="isHit(item)"  :item="item"></item>
                </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>

<script>
    import Item from "./Item";
    import {mapGetters} from "vuex"
    export default {
        name: "YourBingoCard",
        components: {Item},
        computed: {
            ...mapGetters(["player"]),
            isHit(){
                return item => {
                    return this.player.bingo.items.some(i => i.id == item.id)
                }
            }
        },
    }
</script>

<style scoped>

</style>