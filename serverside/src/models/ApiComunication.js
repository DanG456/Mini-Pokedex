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
        //let pokemon_data_array = Object.keys(pokemon_data).map((key)=>[key,pokemon_data[key]]);
        //console.log(pokemon_data_array);
        //return res.send(pokemon_abilities);
    }catch(err){
        console.log(err);
    }
}

//Obtener la información del pokemon de manera aleatoria
Pokemon_information.getRandom = async () => {
    const last_pokemon = 1025;
    let random_id = getRandomInt(last_pokemon);
    const pokemon_requested =  await fetch(`https://pokeapi.co/api/v2/pokemon/${random_id}`);
    const pokemon_data = await pokemon_requested.json(); //toda la información del pokemon en formato json
    let data = formatPokemon_info(pokemon_data);
    return data;
}

//Obtener la información de pokemons en rango
Pokemon_information.getRanged = async (initial_ID, pokemon_quantity) => {
    try{
        let formatted_pokemon_data_for = [];
        const pokemon_requested =  await fetch(`https://pokeapi.co/api/v2/pokemon/${initial_ID}`);
        const pokemon_data = await pokemon_requested.json(); //toda la información del pokemon en formato json
        let formatted_pokemon_data = formatPokemon_info(pokemon_data);
        formatted_pokemon_data_for.push(formatted_pokemon_data);
        //console.log(formatted_pokemon_data_for);

        let id_after_request = formatted_pokemon_data[1]+1; //numero de id instantaneamente consecuente al pokemon solicitado
        let id_limit_count = formatted_pokemon_data[1]+parseInt(pokemon_quantity);//numero final de id al que llegará para mostrar pokemons

        for(var i=id_after_request;i<=id_limit_count;i++){
            const pokemon_requested =  await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const pokemon_data = await pokemon_requested.json(); //toda la información del pokemon en formato json
            let temp_data = format_rangedPokemon_info(pokemon_data)
            formatted_pokemon_data_for.push(temp_data);
            //console.log(pokemon_data);
        }
        
        console.log(formatted_pokemon_data_for);
        return formatted_pokemon_data_for;
        //let pokemon_data_array = Object.keys(pokemon_data).map((key)=>[key,pokemon_data[key]]);
        //console.log(pokemon_data_array);
        //return res.send(pokemon_abilities);
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
    return [pokemon_name,pokemon_id,pokemon_sprite_front,pokemon_sprite_back,moves_names];
}

function format_rangedPokemon_info(pokemon_data){
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
    return [pokemon_name,pokemon_id,pokemon_sprite_front,pokemon_sprite_back,moves_names]
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

function getRandomInt(top_value){
    return Math.floor(Math.random()*top_value)
}
module.exports = Pokemon_information;