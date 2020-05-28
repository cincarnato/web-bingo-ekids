<template>
    <v-card :to="{name:'create-bingo'}">
        <v-row class="ma-0" >
            <v-col cols="3" >
                <v-icon size="72" color="green darken-2">category</v-icon>
            </v-col>
            <v-col cols="9">
                <v-card-title class="subtitle-1 pl-0  pt-0" >Create Bingo</v-card-title>
                <v-card-subtitle class="pl-0 pb-0">Inicia un nuevo juego de Bingo</v-card-subtitle>
            </v-col>
        </v-row>
        <v-btn color="indigo" class="mb-n-10" bottom right absolute text ><v-icon>arrow_forward</v-icon></v-btn>
    </v-card>

</template>
<script>


    export default {
        name: 'HomeCreateBingoCard',
        data() {
            return {}
        },
        created() {
        }
    }
</script>
