import { createRouter, createWebHashHistory } from "vue-router"
import Index from '../components/Index'

const routes = [
    {
        path: '/',
        component: Index 
    },
    {
        path: '/pokemon_ID',
        component: ()=> import('../components/PokemonID')
    },
    {
        path: '/pokemon_range',
        component: ()=> import('../components/PokemonRanged')
    },
    {
        path: '/getRandom',
        component: ()=> import('../components/PokemonRandom')
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router