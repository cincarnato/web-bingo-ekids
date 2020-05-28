import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './pages/Home'
import CreateBingo from './pages/CreateBingo'
import Bingo from './pages/Bingo'
import Player from './pages/Player'
import JoinBingo from './pages/JoinBingo'

const routes = [
    {name: "home", path: '/', component: Home},
    {name: "create-bingo", path: '/create-bingo', component: CreateBingo},
    {name: "join-bingo", path: '/join-bingo', component: JoinBingo},
    {name: "bingo", path: '/bingo', component: Bingo},
    {name: "player", path: '/player', component: Player},

]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})


export default router