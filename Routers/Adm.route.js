//****************************** Main Objective **************** */
// To forward the supported requests and any information encoded in request URL to the appropriate controller functions 
// Route is a section of Express code that associates an HTTP verb (CRUD), a URL path and a function that is called to handle that pattern

const express = require('express');
const routerAdm = express.Router();
const admController = require('../Controllers/Adm.controller.js');
const verifyToken = require('../middleware/authMiddleware.js');
// Adding a couple of routes to the router using the get() method. After we export the route object

routerAdm.get('/AllAdms', admController.getAllAdms);
routerAdm.get('/AllAdmsFilterDocNum/:documentNumber', admController.getAllAdmsByFilterDocNum);
routerAdm.get('/AllAdmsFilterAdmNum/:admNumber', admController.getAllAdmsByFilterAdmNum);
routerAdm.get('/AllAdmsFilterAdmType/:selectedAdmType', admController.getAllAdmsByFilterAdmTypes);
routerAdm.get('/AllAdmsFilterAgent/:agent', admController.getAllAdmsByFilterAgent);
routerAdm.get('/AllAdmsFilterUser/:user', admController.getAllAdmsByFilterUser);
routerAdm.delete('/DeleteAdm/:id', admController.deleteADM);
routerAdm.post('/CreateAdm', admController.createADM);
routerAdm.put('/UpdateAdm/:id', admController.updateADM);

routerAdm.get('/AllAdmsFilter(/:documentNumber)/:admNumber/:selectedAdmType/:agent', admController.getAllAdmsByFilter);


routerAdm.get('/AllAdms1/:agent/:admNumber', admController.getAgentNum);
routerAdm.get('/AllAdms2/:agent/:admNumber/:selectedAdmType', admController.getAgentNumType);
routerAdm.get('/AllAdms3/:agent/:admNumber/:selectedAdmType/:user', admController.getAgentNumTypeUser);
routerAdm.get('/AllAdms4/:documentNumber/:agent', admController.getDocAgent);
routerAdm.get('/AllAdms5/:documentNumber/:agent/:admNumber', admController.getDocAgentNum);
routerAdm.get('/AllAdms6/:documentNumber/:agent/:admNumber/:selectedAdmType', admController.getDocAgentNumType);
routerAdm.get('/AllAdms11/:documentNumber/:agent/:selectedAdmType', admController.getDocAgentType);
routerAdm.get('/AllAdms12/:documentNumber/:agent/:user', admController.getDocAgentUser);
routerAdm.get('/AllAdms13/:agent/:selectedAdmType', admController.getAgentType);
routerAdm.get('/AllAdms14/:agent/:user', admController.getAgentUser);

routerAdm.get('/AllAdms7/:documentNumber/:agent/:admNumber/:selectedAdmType/:user', admController.getDocAgentNumTypeUser);
routerAdm.get('/AllAdms8/:admNumber/:selectedAdmType', admController.getNumType);
routerAdm.get('/AllAdms9/:admNumber/:selectedAdmType/:user', admController.getNumTypeUser);
routerAdm.get('/AllAdms10/:selectedAdmType/:user', admController.getTypeUser);

module.exports = routerAdm;