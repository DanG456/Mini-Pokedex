<template>
    <title>Mini Pokedex</title>
    <br>
    <br>
    <div id="entradas-info">
        <p>Ingrese aqui el nombre o número del pokemon inicial: </p>
        <input type="text" v-model="pk_starter">
        <br>
        <br>
        <p>Selecciona cuantos pokemons después del anterior quieres ver: </p>
        <input type="text" v-model="range">
        <br>
        <br>
        <button id="pokemon_id" @click="data_ranged_reception(pk_starter,range)">Ver información</button>
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
import {getRanged} from '../services/pokemon-service'
export default{
    name:'IndexVue',
    data(){
        return {
            message: 'Selecciona como quieres recibir la información',
            pk_starter: null,
            range: null,
            pokemons: []
        }
    },
    methods: {
        async data_ranged_reception(id,quantity){
            this.pokemons = await getRanged(id,quantity);
        }
    },
    created() {
        this.data_ranged_reception(this.pk_starter,this.range);
    }
}
</script>

<style scoped>
    
</style>