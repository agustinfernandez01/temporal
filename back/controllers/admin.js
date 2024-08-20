const {conection} = require("../config/DB")

// -----------------------

const allPropsad = (req,res) => {
    const query = 'select * from propiedades'
    conection.query(query,(error,result)=>{
        if(error){
            throw error
        }
        else{
            res.json(result);
        }
    })
}

// -----------------------

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); // Usa memoria para almacenar archivos temporalmente

const setProp = (req, res) => {
    upload.array('imagenes')(req, res, (err) => {
        if (err) {
            console.error("Error al subir las imágenes: ", err);
            return res.status(500).send("Error al subir las imágenes");
        }

        const { titulo, descripcion, servicios, direccion, ciudad, provincia, capacidad, habitaciones, baños, tipo } = req.body;

        // Verificar que se hayan subido archivos
        if (!req.files || req.files.length === 0) {
            return res.status(400).send("No se subieron imágenes");
        }

        // Convertir los archivos a Base64 y obtener el tipo MIME
        const imagenes = req.files.map(file => ({
            data: file.buffer.toString('base64'),
            type: file.mimetype
        }));

        // Convertir el array de imágenes a JSON para almacenarlo en la base de datos
        const imagenesJSON = JSON.stringify(imagenes);

        const query = "INSERT INTO propiedades (titulo, descripcion, servicios, direccion, ciudad, provincia, capacidad, habitaciones, baños, tipo, imagenes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        conection.query(query, [titulo, descripcion, servicios, direccion, ciudad, provincia, capacidad, habitaciones, baños, tipo, imagenesJSON], (error, results) => {
            if (error) {
                console.error("Error al insertar datos: ", error);
                return res.status(500).send("Error al insertar datos");
            }
            res.send('Datos insertados correctamente, ID: ' + results.insertId);
        });
    });
};



// -----------------------

const deleteProp = (req,res) =>{

    const id = req.params.id
    const qery = "delete from propiedades where id = ?";
    
    conection.query(qery,[id],(error,result)=>{
        error ? (
            console.error("error en eliminar la propiedad"+ error)
        ) : (
            res.send("Propiedad eliminada correctamente" +result)
        )
    })
}

module.exports = { allPropsad , setProp , deleteProp}