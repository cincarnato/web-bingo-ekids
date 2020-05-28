import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './pages/Home'
import CreateBingo from './pages/CreateBingo'
import BingoAdmin from './pages/BingoAdmin'

const routes = [
    {name: "home", path: '/', component: Home},
    {name: "create-bingo", path: '/create-bingo', component: CreateBingo},
    {name: "bingo-admin", path: '/bingo-admin', component: BingoAdmin},

]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})


export default router