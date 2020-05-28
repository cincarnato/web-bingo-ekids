import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bingo: null
    },
    mutations: {
        setBingo(state,bingo){
            state.bingo = bingo
        }
    },
    actions: {

    },
    getters:{

    }
})