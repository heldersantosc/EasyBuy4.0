/* importando o módulo do framework express */ 
const express = require('express');
/* importando o módulo do consign */
const consign = require('consign');
/* importando o módulo do body-parser */
const bodyParser = require('body-parser');
/* importando o módulo do express-validator */
const { check, validationResult } = require('express-validator');
/* importando o módulo do express-session */
const expressSession = require('express-session');
/* importando o módulo do express-favicon */
const expressFavicon = require('express-favicon');
    
/* Iniciando o objeto do express */
const app = express();

/* Definindo a Engine e a pasta das views */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurando o midleware express.static */
app.use(express.static('./app/public'));
/* configurando o midleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));
/* configurando o express-session */
app.use(expressSession({
    secret: ' ',
    resave: false,
    saveUninitialized: false
}));

/*efetuando o autoload das rotas para o app */
consign()
    .include('config/dbconnection.js')
    .then('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exporta para o server o app com todas as configurções */
module.exports = app;