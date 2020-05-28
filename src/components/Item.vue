<template>
    <v-card :color="color" class="pa-1" @click="$emit('click',item)">
        <v-img contain :height="imgHeight" :src="img"></v-img>
        <v-card-text v-if="showText" class="text-center py-0 my-0">
            {{item.name}}
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Item",
        props: {
            item: {type: Object},
            hit: {type: Boolean, default: false},
            showText: {type: Boolean, default: true},
            imgHeight: {type: String, default:"100"}
        },
        computed:{
            img(){
                return process.env.VUE_APP_APIHOST + this.item.img
            },
            color(){
                return this.hit?'yellow':'white'
            }

        }
    }
</script>

<style scoped>

</style>