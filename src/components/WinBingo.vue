<template>
    <div>
        <v-dialog max-width="300" :value="show">
            <v-img alt="Bingo!" src="@/assets/bingo.gif"></v-img>
            <br>
            <v-img src="@/assets/happy.gif"></v-img>
            <v-btn dark color="red" @click="endGame">End Game</v-btn>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "WinBingo",
        props: {
            show: {type:Boolean, default:false}
        },
        methods: {
            endGame() {
                if (confirm("Esta seguro de terminar el juego")) {
                    this.$store.commit("setPlayer", null)
                    this.$router.push({name: 'home'})
                }
            },
        }
    }
</script>

<style scoped>

</style>