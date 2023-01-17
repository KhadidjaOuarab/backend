
const express = require('express');
const routerCity = express.Router();
const cityController = require('./City.controller.js');

routerCity.get('/AllCities', cityController.getAllCities);
routerCity.post('/create', cityController.createCity);


module.exports = routerCity;