<template>
    <v-card   color="blue lighten-4" >
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
    export default {
        name: "BingoItems",
        components: {Item},
        props: {
            items: Array
        }
    }
</script>

<style scoped>

</style>