//****************************** Main Objective **************** */
// To forward the supported requests and any information encoded in request URL to the appropriate controller functions 
// Route is a section of Express code that associates an HTTP verb (CRUD), a URL path and a function that is called to handle that pattern

const express = require('express');
const routerUser = express.Router();
const userController = require('../Controllers/User.controller.js');
const verifyToken = require('../middleware/authMiddleware.js');
// Adding a couple of routes to the router using the get() method. After we export the route object

routerUser.get('/AllUsers', userController.getAllUsers);
routerUser.post('/create', userController.createUser);
/*routerUser.post('/signup', userController.signup);
routerUser.post('/login', userController.login);
routerUser.route("/").post(userController.registerUser);
routerUser.get('/users', verifyToken);*/

routerUser.post("/login", userController.authUser);


module.exports = routerUser;