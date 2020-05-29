import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from "vuex-persistedstate";
import BingoProvider from "./providers/BingoProvider";


export default new Vuex.Store({
    plugins: [
        createPersistedState({
            key: "bingoekids",
            reducer: state => ({bingo: state.bingo, player: state.player})
        })
    ],
    state: {
        bingo: null,
        bingoPlayers: [],
        player: null
    },
    mutations: {
        setBingo(state, bingo) {
            state.bingo = bingo
        },
        setBingoPlayers(state, bingoPlayers) {
            state.bingoPlayers = bingoPlayers
        },
        setPlayer(state, player) {
            state.player = player
        },
        addBingoItem(state, item) {
            if (state.bingo.items == undefined) {
                state.bingo.items = []
            }
            if (item) {
                state.bingo.items.push(item)
            }
        },
        refreshPlayerBingo(state, bingo) {
            state.player.bingo = bingo
        },
        addPlayerItem(state, item) {
            if (state.player.card == undefined) {
                state.player.card = []
            }
            if (item) {
                state.player.card.push(item)
            }
        },
        addPlayerBingoItem(state, item) {
            if (state.player.bingo.items == undefined) {
                state.player.bingo.items = []
            }
            if (item) {
                state.player.bingo.items.push(item)
            }
        }
    },
    actions: {
        play(_,item){
            let snd = process.env.VUE_APP_APIHOST + item.snd
            let audio = new Audio(snd);
            audio.play();
        },
        roll({state, commit, dispatch}) {
            BingoProvider.raffleItem(state.bingo.id)
                .then(
                    response => {
                        dispatch('play', response.data.raffleItem)
                        commit('addBingoItem', response.data.raffleItem)
                        dispatch('loadPlayers')
                    }
                )
                .catch(
                    err => {
                        console.error(err)
                    }
                )
        },
        loadPlayers({state, commit}){
            BingoProvider.playersByBingo(state.bingo.id)
                .then(response => {
                    commit('setBingoPlayers', response.data.playersByBingo)
                })
                .catch(
                    err => {
                        console.error(err)
                    }
                )
        },
    },
    getters: {
        bingoName(state){
            if(state.bingo){
                return state.bingo.name
            }
            if(state.player && state.player.bingo){
                return state.player.bingo.name
            }
            return null
        },
        bingo(state) {
            return state.bingo
        },
        player(state) {
            return state.player
        },
        bingoPlayers(state) {
            return state.bingoPlayers
        },
        bingoItems(state) {
            let a = [...state.bingo.items, ...[]]
            return a.reverse()
        },
        playerBingoItems(state){
            let a = [...state.player.bingo.items, ...[]]
            return a.reverse()
        },
        playerCardLeft(state){
            let itemsLeft = state.player.card.filter(item => !state.player.bingo.items.some(i => i.id == item.id))
            return itemsLeft.length
        }
    }
})