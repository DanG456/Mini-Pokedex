//Creación de la aplicación
const express = require('express');
const app = express();
const cors = require('cors');
//Importe de modulos
const {get_rangedPokemons, getPokemon_information_byID} = require("./models/ApiComunication")
app.use(express.json());
app.use(cors())
//Routes
app.use(require('./routes/index'))

//ejecutar servidor
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}`));