<template>
    <title>Mini Pokedex</title>
    <br>
    <br>
    <h3>{{ message }}</h3>
    <div id="entradas-info">
        <p>Ingrese aqui el nombre o número del pokemon: </p>
        <input type="text" id="nombre" v-model="pokemon">
        <button class="btn btn-dark" id="pokemon_id_btn" @click="data_reception_ID(pokemon)">Ver información</button>
        <!--<form @submit.prevent="">
            <label for="pokemon_id">Ingrese aqui el nombre o número del pokemon: </label>
            <input type="text" class= "form-control" id="nombre" v-model="pokemon">
            <button class="btn btn-dark" type="submit" id="pokemon_id_btn">Ver información</button>
        </form>
        -->
    </div>
    <div v-if="pokemons!=null">
        <div class="row" id="tarjeta">
        <div class="col-md-4" v-for="pk in pokemons" v-bind:key=pk.id>
            <div class="card bg-primary">
                <div class="card-header">
                    <!--<img src={{ pokemon.sprite-front }} alt="">-->
                    <h3>Nombre del pokemon: {{ pk.nombre }}</h3>
                    <h3>Id global del pokemon: {{ pk.id }}</h3>
                    <h3>Movimiento: {{ pk.move }}</h3>
                    <img v-bind:src="pk.sprite-front" alt="">
                    <img v-bind:src="pk.sprite-back" alt="">
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { getByID } from '../services/pokemon-service'
export default{
    name:'IndexVue',
    data(){
        return {
            message: 'Obtención del pokemon por nombre o id',
            pokemon: null,
            pokemons: []
        }
    },
    methods: {
        async data_reception_ID(pokemon){
            this.pokemons = await getByID(pokemon);
            
        }
    },
    created() {
        this.data_reception_ID(this.pokemon);
    }
}
</script>

<style scoped>
    
</style>