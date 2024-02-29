const Pokemon_information = require('../models/ApiComunication');
const Pokemon_Info_Controller = {};

Pokemon_Info_Controller.get_By_ID = async (req,res) => {
    const pokemon_normal_info = await Pokemon_information.getByID(req.params.id);
    res.json(pokemon_normal_info);
}

Pokemon_Info_Controller.get_Random = async (req,res) => {
    const pokemon_random_info = await Pokemon_information.getRandom();
    res.json(pokemon_random_info);
}

Pokemon_Info_Controller.get_Ranged = async(req,res) => {
    const pokemon_ranged_info = await Pokemon_information.getRanged(req.params.id,req.params.quantity);
    res.json(pokemon_ranged_info);
}


module.exports = Pokemon_Info_Controller;