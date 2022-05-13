//DB CONFIG
require("dotenv").config();

//SERVER CONFIG
const express = require("express");
const app = express();
const routeUsuarios = require("./routes/routeUsuarios");
app.use(express.urlencoded({ extended: true }));

//Router Usuarios
app.use("/usuarios", routeUsuarios);

//Server INFO
app.listen(3002, console.log("Server up on :3002"));
