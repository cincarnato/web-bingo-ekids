<template>
    <v-card   color="blue lighten-4" >
        <v-btn large absolute top right fab dark color="indigo darken-4" @click="roll">
            <v-icon>play_arrow</v-icon>
        </v-btn>
        <v-card-title>Bingo Items</v-card-title>
        <v-card-subtitle>Items sorteados en el bingo</v-card-subtitle>
        <v-card-text class="overflow-y-auto" style="height: 380px"  >
            <v-row>
                <v-col cols="12" v-for="(item,index) in items" :key="index">
                    <item  :item="item"></item>
                </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>

<script>
    import Item from "./Item";
    import {mapActions} from "vuex";
    export default {
        name: "BingoItems",
        components: {Item},
        props: {
            items: Array
        },
        methods: {
            ...mapActions(['roll']),
        }
    }
</script>

<style scoped>

</style>