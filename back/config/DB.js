// CONEXION A NUESTRA BASE DE DATOS

const { DB_HOST , DB_USER , DB_PASS , DB_NAME } = require("./config")
const mysql = require("mysql2");


//la función mysql.createConnection está diseñada para aceptar un objeto con las propiedades de configuración.
const conection = mysql.createConnection({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASS,
    database:DB_NAME
});

module.exports = {conection}