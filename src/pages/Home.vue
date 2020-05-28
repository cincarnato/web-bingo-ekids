<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-img contain max-height="300" src="@/assets/kids.png"></v-img>
            </v-col>
            <v-col cols="12" md="4" sm="6" offset-md="2">
                <home-create-bingo-card></home-create-bingo-card>
            </v-col>
            <v-col cols="12" md="4" sm="6">
                <home-join-bingo-card></home-join-bingo-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import HomeCreateBingoCard from "../components/HomeCreateBingoCard";
    import HomeJoinBingoCard from "../components/HomeJoinBingoCard";
    export default {
        name: "Home",
        components: {HomeJoinBingoCard, HomeCreateBingoCard}
    }
</script>

<style scoped>

</style>