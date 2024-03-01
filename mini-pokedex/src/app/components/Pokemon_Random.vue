<template>
    <div class="card">
        <div class="card-header">
            <h3>Datos del pokemon aleatorio</h3>
        </div>
    </div>
    <div >
        <h3>{{ pokemons[0] }}</h3>
    </div>
</template>

<script>
import getRandomPokemon from '../../services/pokemon-service';
export default{
    name: 'pokemon-random',
    data(){
        return{
            pokemons: []
        } 
    },
    async mounted(){
        this.pokemons = await getRandomPokemon();
    }
}
</script>