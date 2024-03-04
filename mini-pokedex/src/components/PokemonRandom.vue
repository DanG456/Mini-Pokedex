<template>
    <title>Mini Pokedex</title>
    <h3>Datos de pokemon aleatorio</h3>

    <div class="col align-self-center" id="tarjeta">
        <div class="col-md-4" v-for="pokemon in pokemons" v-bind:key=pokemon.id>
            <div class="card mb-3 bg-info">
                <div class="card-header">
                    <!--<img src={{ pokemon.sprite-front }} alt="">-->
                    <h3>{{ pokemon.nombre }}</h3>
                </div>
                <div class="card-body">
                    
                    <p class="card-text">Id global del pokemon: {{ pokemon.id }}</p>
                    <p class="card-text">Movimiento: {{ pokemon.move }}</p>
                    <img v-bind:src="pokemon.sprite-front" alt="">
                    <img v-bind:src="pokemon.sprite-back" alt="">
                </div>
            </div>
        </div>
    </div>
    
    <button class="btn btn-secondary" @click="data_reception()">Actualizar</button>
</template>

<script>
import {getRandomPokemon} from '../services/pokemon-service'
export default{
    name: 'getRandomPokemon',
    data(){
        return{
            pokemons: [],
        } 
    },
    methods: {
        async data_reception(){
            this.pokemons = await getRandomPokemon();
        }
    },
    created(){
        this.data_reception();
    }
}
</script>

<style scoped>
    
</style>