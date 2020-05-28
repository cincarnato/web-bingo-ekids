<template>
    <v-container>
        <v-row>
            <v-col>
                <create-bingo-form></create-bingo-form>

            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    import CreateBingoForm from "../components/CreateBingoForm";
    export default {
        name: "CreateBingo",
        components: {CreateBingoForm}
    }
</script>

<style scoped>

</style>