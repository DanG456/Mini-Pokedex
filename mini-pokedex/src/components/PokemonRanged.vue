<template>
    <title>Mini Pokedex</title>
    <br>
    <br>
    <h1>Obtención de un listado de pokemons</h1>
    <br>
    <div  class="row" id="poke_starter">
        <div class="col-md-3">
            <p>Ingrese aqui el nombre o número del pokemon inicial: </p> <input type="text" v-model="pk_starter">
            <br>
            <br>
            
        </div>
        <div class="col-md-3" >
            <p>Selecciona cuantos pokemons después del anterior quieres ver: </p> <input type="text" v-model="range">
            <br>
            <br>
        </div>
        <br>
    </div>
    <button id="pokemon_id" @click="data_ranged_reception(pk_starter,range)" class="btn btn-success">Ver información</button>

    <div class="row" id="tarjeta">
        <div class="col-md-5" v-for="pk in pokemons" v-bind:key=pk.id>
            <div class="card bg-info">
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
    
</template>

<script>
import {getRanged} from '../services/pokemon-service'
export default{
    name:'getRanged',
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
        },
    },
    created() {
        this.data_ranged_reception(this.pk_starter,this.range);
        
    }
}
</script>

<style scoped>
    #poke_starter{
        padding-inline-start: 500px;
    }
</style>