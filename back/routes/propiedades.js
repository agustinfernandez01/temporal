const express = require("express");

const router = express.Router();

const { singleProp , allProp } = require("../controllers/propiedades")


//ENRUTAMIENTO CON LAS FUNCIONES
router.get("/propiedades",allProp);
router.get("/propiedades/:id",singleProp);
// DESPUES DE CONECTAR EL ROUTING CON LOS CONTROLLERS TENEMOS QUE CONECTARLO A APP

module.exports = router;