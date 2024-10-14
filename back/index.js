// ACA EMPIEZA NUESTRA APLICACION
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")
const {conection} = require("./config/DB");
const app = express(); //ejecutando express

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


const propiedades = require("./routes/propiedades")
const propiedadesb = require("./routes/propiedadesb")
const admin = require("./routes/admin")
const { EMAIL_PASS, EMAIL_USER } = require("./config/config");

// Seccion email -----------
// end Seccion email-----------

app.use(express.json());
app.use(cors());
app.use(morgan("dev"))

// propiedades tucuman , BSAS y admin
app.use("/",propiedades)
app.use("/",propiedadesb)
app.use("/",admin)

app.get("/", (req,res)=>{
    console.log("Bienvenido")
    res.send({message:"bienvenidos a la api"});
});

const puerto = 3306

app.listen(puerto,()=>{
    console.log("Escuchando en el puerto  "+puerto);
});


conection.connect((err,results)=>{
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        return;
    }
    console.log('Conectado a la base de datos.');
})