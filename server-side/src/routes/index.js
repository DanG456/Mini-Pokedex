const express = require('express');
const routes = express.Router();
const Pokemon_Info_Controller = require('../controllers/Pokemon_Info_Controller')

routes.get('/', (req,res) => {
    res.send('Initialization of the website succesful');
});

routes.get('/pokemon/:id', Pokemon_Info_Controller.get_By_ID);

routes.get('/pokemon-range/:id/:quantity', Pokemon_Info_Controller.get_Ranged);

routes.get('/random-pokemon', Pokemon_Info_Controller.get_Random);

module.exports = routes;