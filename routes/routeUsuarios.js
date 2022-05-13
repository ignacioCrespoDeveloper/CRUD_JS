const express = require("express");
const app = express();
const routeUsuarios = express.Router();
app.use(express.urlencoded({ extended: true }));
const userController = require("../controllers/userController");

routeUsuarios.get("/createUser", userController.createUser);

routeUsuarios.get("/editUser", userController.editUser);

routeUsuarios.get("/deleteUser", userController.deleteUser);

routeUsuarios.get("/getUser", userController.getUser);

routeUsuarios.get("/getAllUsers", userController.getAllUsers);

module.exports = routeUsuarios;
