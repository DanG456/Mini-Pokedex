import httpPokemon from "../environments/environment";

export const getRandomPokemon = async () => {
    const { data } = await httpPokemon.get('/random-pokemon');
    return data;
}

export const getByID = async (id) => {
    const { data } = await httpPokemon.get(`/pokemon/${id}`);
    return data;
}

export const getRanged = async (id,quantity) => {
    const { data } = await httpPokemon.get(`/pokemon-range/${id}/${quantity}`);
    return data;
}