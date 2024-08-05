// CONEXION A NUESTRA BASE DE DATOS

const mysql = require("mysql2");

//la función mysql.createConnection está diseñada para aceptar un objeto con las propiedades de configuración.
const conection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"pelado02",
    database:"DB_temporal"
});

module.exports = {conection}