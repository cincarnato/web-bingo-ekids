<template>
    <v-container>
        <v-row>
            <v-col>
                <join-bingo-form></join-bingo-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import JoinBingoForm from "../components/JoinBingoForm";
    export default {
        name: "JoinBingo",
        components: {JoinBingoForm}
    }
</script>

<style scoped>

</style>