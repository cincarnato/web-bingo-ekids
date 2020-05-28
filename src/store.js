import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from "vuex-persistedstate";


export default new Vuex.Store({
    plugins: [
        createPersistedState({
            key: "bingoekids",
            reducer: state => ({bingo: state.bingo, player: state.player})
        })
    ],
    state: {
        bingo: null,
        player: null
    },
    mutations: {
        setBingo(state,bingo){
            state.bingo = bingo
        },
        setPlayer(state,player){
            state.player = player
        },
        addBingoItem(state,item){
            if(state.bingo.items == undefined){
                state.bingo.items = []
            }
            if(item){
                state.bingo.items.push(item)
            }
        }
    },
    actions: {

    },
    getters:{
        bingo(state) {
            return state.bingo
        },
        player(state){
            return state.player
        },
        bingoItems(state){
          return state.bingo.items
        }
    }
})