<template>
    <v-card :to="{name:'create-bingo'}">
        <v-row class="ma-0" >
            <v-col cols="3" >
                <v-icon size="72" color="blue darken-2">pets</v-icon>
            </v-col>
            <v-col cols="9">
                <v-card-title class="subtitle-1 pl-0  pt-0" >Join Bingo</v-card-title>
                <v-card-subtitle class="pl-0 pb-0">Ingresa a un bingo existente</v-card-subtitle>
            </v-col>
        </v-row>
        <v-btn color="indigo" class="mb-n-10" bottom right absolute text ><v-icon>arrow_forward</v-icon></v-btn>
    </v-card>

</template>
<script>


    export default {
        name: 'HomeJoinBingoCard',
        data() {
            return {}
        },
        created() {
        }
    }
</script>
