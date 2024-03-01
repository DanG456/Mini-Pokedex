//Funciones para obtener la información de los pokemons
const Pokemon_information = {};

//Obtener la información del pokemon indicado
Pokemon_information.getByID = async (id) => {
    try{
        const pokemon_requested =  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon_data = await pokemon_requested.json(); //toda la información del pokemon en formato json
        let formatted_pokemon_data = formatPokemon_info(pokemon_data);
        console.log(formatted_pokemon_data);
        return formatted_pokemon_data;
    }catch(err){
        console.log(err);
        return("Error, el pokemon indicado no existe, prueba ingresarlo de nuevo")
        
    }
}

//Obtener la información del pokemon de manera aleatoria
Pokemon_information.getRandom = async () => {
    try{
        const last_pokemon = 1025;
        let random_id = getRandomInt(last_pokemon);
        const pokemon_requested =  await fetch(`https://pokeapi.co/api/v2/pokemon/${random_id}`);
        const pokemon_data = await pokemon_requested.json(); //toda la información del pokemon en formato json
        let data = formatPokemon_info(pokemon_data);
        return data;
    }catch(err){
        console.log(err);
        return("Error, no se pudo obtener la lista de pokemons en el rango especificado.\n Por favor intente de nuevo verifique que sus valores sean correctos");
    }
}

//Obtener la información de pokemons en rango
Pokemon_information.getRanged = async (initial_ID, pokemon_quantity) => {
    try{
        let formatted_pokemon_data_for = [];
        const pokemon_requested =  await fetch(`https://pokeapi.co/api/v2/pokemon/${initial_ID}`);
        const pokemon_data = await pokemon_requested.json(); //toda la información del pokemon en formato json
        let formatted_initial_data = format_info(pokemon_data);

        let id_request = formatted_initial_data[1]; //numero de id del pokemon solicitado
        let id_limit_count = id_request+parseInt(pokemon_quantity)//numero final de id al que llegará para mostrar pokemons

        for(var i=id_request;i<=id_limit_count;i++){
            const pokemon_requested =  await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const pokemon_data = await pokemon_requested.json(); //toda la información del pokemon en formato json
            let temp_data = formatPokemon_info(pokemon_data)
            formatted_pokemon_data_for.push(temp_data);
            console.log(temp_data);
        }
        
        console.log(formatted_pokemon_data_for);
        return formatted_pokemon_data_for;
    }catch(err){
        console.log(err);
    }
}
//Funcion para dar formato a la información
function formatPokemon_info(pokemon_data){
    const pokemon_moves = objToArray(pokemon_data['moves']);//array con la información general de habilidades
    const pokemon_sprite_back = pokemon_data['sprites']['back_default'];
    const pokemon_sprite_front = pokemon_data['sprites']['front_default'];
    const pokemon_name = pokemon_data['name'];
    const pokemon_id = pokemon_data['id'];
    const moves_names = [];
    //Recuperación unicamente del nombre del movimiento
    for(var i=0; i<pokemon_moves.length;i++){
        moves_names.push(pokemon_moves[i][0][0]);
    }
    let single_move = getRandomMove(moves_names);
    //return [pokemon_name,pokemon_id,pokemon_sprite_front,pokemon_sprite_back,single_move];
    return {'nombre': pokemon_name,
            'id': pokemon_id,
            'sprite-front': pokemon_sprite_front,
            'sprite-back': pokemon_sprite_back,
            'move': single_move};
}

function format_info(pokemon_data){
    const pokemon_moves = objToArray(pokemon_data['moves']);//array con la información general de habilidades
    const pokemon_sprite_back = pokemon_data['sprites']['back_default'];
    const pokemon_sprite_front = pokemon_data['sprites']['front_default'];
    const pokemon_name = pokemon_data['name'];
    const pokemon_id = pokemon_data['id'];
    const moves_names = [];
    
    //Recuperación unicamente del nombre del movimiento
    for(var i=0; i<pokemon_moves.length;i++){
        moves_names.push(pokemon_moves[i][0][0]);
    }
    let single_move = getRandomMove(moves_names);
    return [pokemon_name,pokemon_id,pokemon_sprite_front,pokemon_sprite_back,single_move];
    /*return {'nombre': pokemon_name,
            'id': pokemon_id,
            'sprite-front': pokemon_sprite_front,
            'sprite-back': pokemon_sprite_back,
            'move': single_move};*/
}

//De todos los movimientos que tiene el pokemon se elige uno al azar
function getRandomMove(movements_list){
    let movement_index = getRandomInt(movements_list.length);
    return movements_list[movement_index];
}

//Comprobar si lo que se paso es un objeto
const isObject = (obj) => {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}
//En caso de que sea un objeto lo que se pasó lo convierte en arreglo
const objToArray = (obj) => {
    return Object.keys(obj).map((key) => {
        return isObject(obj[key]) ? 
            objToArray(obj[key]) :
            obj[key]
        ;
    });    
}
//Obtener un número entero aleatorio
function getRandomInt(top_value){
    return Math.floor(Math.random()*(top_value))
}
module.exports = Pokemon_information;