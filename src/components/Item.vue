<template>
    <v-card :color="color" class="pa-1" @click="click">
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
            imgHeight: {type: String, default:"80"}
        },
        data(){
          return {
              confirm: false
          }
        },
        computed:{
            img(){
                return process.env.VUE_APP_APIHOST + this.item.img
            },
            color(){
                return this.confirm?'green':this.hit?'yellow':'white'
            },
            snd(){
                return process.env.VUE_APP_APIHOST + this.item.snd
            }

        },
        methods: {
            play(){
                let audio = new Audio(this.snd);
                audio.play();
            },
            click(){
                this.play()
                this.$emit("click", this.item)
                if(this.hit){
                    this.confirm = true
                }
            }
        }
    }
</script>

<style scoped>

</style>