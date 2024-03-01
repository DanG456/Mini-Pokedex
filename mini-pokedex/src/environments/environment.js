import axios from 'axios';

const httpPokemon = axios.create({
    baseURL:'http://localhost:3000'
})

export default httpPokemon;