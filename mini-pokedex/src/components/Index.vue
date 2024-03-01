<template>
    <title>Mini Pokedex</title>
    <div id="selector_info_mode">
        <h1>{{ message }}</h1>
    </div>
    <div>
        <p>En esta mini pokedex se cuentan con las selecciones de arriba, las cuales nos pueden regresar la información de un
            pokemon de distintas maneras
        </p>
    <ul>
        <li>En <strong> obtener por ID </strong> deberemos ingresar el nombre del pokemon o el número del cual queremos ver la informacion</li>
        <li>En <strong>obtener en rango </strong>deberemos ingresar el nombre o id de un pokemon para iniciar la busqueda y de un <br>
            número que nos devolverá esa cantidad de pokemons posteriores a la seleccion inicial
        </li>
        <li>En <strong>obtener aleatorio </strong>obtendremos la información de un pokemon al azar</li>
    </ul>
    </div>

</template>

<script>
export default{
    name:'IndexVue',
    data(){
        return {
            message: 'Bienvenido a la mini pokedex'
        }
    },
    methods: {
    
    },
    watch: {

    }
}
</script>

<style scoped>
    
</style>