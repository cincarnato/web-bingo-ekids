<template>
    <v-card outlined>
        <v-card-title>
            <div>Join Bingo</div>
        </v-card-title>
        <v-card-subtitle>
            Unirse a un bingo
        </v-card-subtitle>

        <v-card-text>
            <v-form ref="bingoForm" autocomplete="off" @submit.prevent="save">

                <v-row>
                    <v-col cols="12" sm="6" md="3" lg="3">
                        <v-text-field
                                prepend-icon="title"
                                label="Player Name"
                                placeholder="Nombre del jugador"
                                type="text"
                                v-model="form.playerName"
                                class="pa-3"
                                hint="Ingresa tu nombre"
                                :rules="[rules.required]"
                        />
                    </v-col>

                    <v-col cols="12" sm="6" md="3" lg="3">
                        <v-text-field
                                prepend-icon="title"
                                label="Code"
                                placeholder="Codigo"
                                type="text"
                                v-model="form.code"
                                class="pa-3"
                                hint="Ingresa el codigo de un bingo existente"
                                :rules="[rules.required]"
                                :error-messages="errors.code"
                                @input="errors.code=null"
                        />
                    </v-col>


                </v-row>
            </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-btn @click="save" text color="blue darken-4">Join</v-btn>
        </v-card-actions>

    </v-card>
</template>

<script>
    import BingoProvider from "../providers/BingoProvider";

    export default {
        name: "JoinBingoForm",
        data() {
            return {
                form: {
                    playerName: '',
                    code: ''
                },
                rules: {
                    required: value => !!value || 'Requerido'
                },
                errors: {
                    code: null
                }
            }
        },
        mounted() {
            if(this.$store.state.player){
                this.$router.push({name:'player'});
            }
        },
        methods: {

            save() {
                if (this.$refs.bingoForm.validate()) {
                    BingoProvider.joinBingo(this.form)
                        .then(
                            response => {
                                if(response.data.joinBingo){
                                    this.$store.commit('setPlayer',response.data.joinBingo)
                                    this.$router.push({name:'player'});
                                }else{
                                    this.errors.code = 'Codigo invalido'
                                }

                            }
                        )
                        .catch(
                            err => {
                                console.error(err)
                            }
                        )

                }
            }
        }
    }
</script>

<style scoped>

</style>