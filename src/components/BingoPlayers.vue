<template>
    <v-row>
        <v-col v-for="(player,index) in players" :key="index">
            <bingo-player :player="player"></bingo-player>
        </v-col>
    </v-row>
</template>

<script>
    import BingoPlayer from "./BingoPlayer";

    export default {
        name: "BingoPlayers",
        components: {BingoPlayer},
        props: {
            players: Array
        },
    }
</script>

<style scoped>

</style>