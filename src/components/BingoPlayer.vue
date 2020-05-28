<template>
    <v-card color="light-green lighten-4">
        <v-card-title>{{player.name}}</v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="1" v-for="(item,index) in player.card" :key="index">
                    <item :imgHeight="'30'" :show-text="false" :hit="isHit(item)" :item="item"></item>
                </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>

<script>

    import {mapGetters} from "vuex";
    import Item from "./Item";

    export default {
        name: "BingoPlayer",
        components: {Item},
        props: {
            player: Object
        },
        computed: {
            ...mapGetters(["bingo"]),
            isHit() {
                return item => {
                    return this.bingo.items.some(i => i.id == item.id)
                }
            }
        }

    }
</script>

<style scoped>

</style>