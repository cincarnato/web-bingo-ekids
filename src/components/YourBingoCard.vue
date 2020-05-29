<template>
    <v-card color="light-green lighten-4">
        <v-card-title>Your Bingo Card </v-card-title>
        <v-card-subtitle>Tu carton de Bingo</v-card-subtitle>
        <v-card-text>
            <v-row>
                <v-col cols="6" sm="4" md="4" v-for="(item,index) in player.card" :key="index">
                    <item :hit="isHit(item)"  :item="item"></item>
                </v-col>
            </v-row>

        </v-card-text>
        <v-btn fab dark top right absolute color="teal darken-2">
            {{playerCardLeft}}
        </v-btn>
        <win-bingo :show="win"></win-bingo>
    </v-card>
</template>

<script>
    import Item from "./Item";
    import {mapGetters} from "vuex"
    import WinBingo from "./WinBingo";
    export default {
        name: "YourBingoCard",
        components: {WinBingo, Item},
        computed: {
            ...mapGetters(["player", "playerCardLeft"]),
            win(){
                if(this.playerCardLeft == 0){
                    return true
                }
                return false
            },
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