<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <router-link to="/">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/alien-logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title class="white--text ml-2">
          <b >Bingo Kids</b>
        </v-toolbar-title>


      </div>
      </router-link>

      <v-spacer></v-spacer>
      <v-toolbar-title v-if="bingoName" class="white--text ml-2">
        Game: <b>{{bingoName}}</b>
      </v-toolbar-title>

    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import {mapGetters} from "vuex"
export default {
  name: 'App',
  computed: {
    ...mapGetters(["bingoName"])
  },
};
</script>


<style scoped>
  li a {
    text-decoration: none;
  }
  a {  text-decoration: none;}
</style>