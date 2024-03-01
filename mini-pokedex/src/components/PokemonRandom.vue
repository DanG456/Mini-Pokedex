<template>
    <title>Mini Pokedex</title>
    <h3>Datos de pokemon aleatorio</h3>

    <div v-if="pokemons!=null">
        <div class="row" id="tarjeta">
        <div class="col-md-4" v-for="pokemon in pokemons" v-bind:key=pokemon.id>
            <div class="card bg-primary">
                <div class="card-header">
                    <!--<img src={{ pokemon.sprite-front }} alt="">-->
                    <h3>Nombre del pokemon: {{ pokemon.nombre }}</h3>
                    <h3>Id global del pokemon: {{ pokemon.id }}</h3>
                    <h3>Movimiento: {{ pokemon.move }}</h3>
                </div>
            </div>
        </div>
    </div>
    </div>
    <button class="btn btn-secondary" @click="data_reception()">Actualizar</button>
</template>

<script>
import { getRandomPokemon } from '../services/pokemon-service';
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
    #tarjeta{
        position: relative;
    }
</style>