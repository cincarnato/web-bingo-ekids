<template>
    <v-card outlined>
        <v-card-title>
            <div>Create Bingo</div>
        </v-card-title>
        <v-card-subtitle>
            Crear bingo
        </v-card-subtitle>

        <v-card-text>
            <v-form ref="bingoForm" autocomplete="off" @submit.prevent="save">

                <v-row>
                    <v-col cols="12" sm="6" md="3" lg="3">
                        <v-text-field
                                id="title"
                                prepend-icon="title"
                                name="title"
                                label="Name"
                                placeholder="Nombre"
                                type="text"
                                v-model="form.name"
                                class="pa-3"
                                hint="Define el nombre de tu Bingo"
                                :rules="[rules.required]"
                        />
                    </v-col>


                </v-row>
            </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-btn @click="save" text color="blue darken-4">Create</v-btn>
        </v-card-actions>

    </v-card>
</template>

<script>
    import BingoProvider from "../providers/BingoProvider";

    export default {
        name: "CreateBingoForm",
        data() {
            return {
                form: {
                    name: ''
                },
                rules: {
                    required: value => !!value || 'Requerido'
                },
            }
        },
        mounted() {
            if(this.$store.state.bingo){
                this.$router.push({name:'bingo'});
            }
        },
        methods: {

            save() {
                if (this.$refs.bingoForm.validate()) {
                    BingoProvider.createBingo(this.form)
                        .then(
                            response => {
                                this.$store.commit('setBingo',response.data.createBingo)
                                this.$router.push({name:'bingo'});
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