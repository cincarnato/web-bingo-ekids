<template>
    <div>
        <v-dialog max-width="300" :value="show">
            <v-img alt="Bingo!" src="@/assets/bingo.gif"></v-img>
            <br>
            <v-img src="@/assets/happy.gif"></v-img>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "WinBingo",
        props: {
            show: {type:Boolean, default:false}
        }
    }
</script>

<style scoped>

</style>