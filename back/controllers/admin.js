const {conection} = require("../config/DB")

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

const setProp = (req,res) =>{
    const { titulo , descripcion , direccion , ciudad , provincia , capacidad , habitaciones , baños , tipo , imagenes} = req.body
    const query = "insert into propiedades (titulo,descripcion,direccion,ciudad,provincia,capacidad,habitaciones,baños,tipo,imagenes) values (?,?,?,?,?,?,?,?,?,?)"
    conection.query(query,[ titulo , descripcion , direccion , ciudad , provincia , capacidad , habitaciones , baños , tipo , imagenes],(error,results)=>{
        if (error) throw console.error("Error al insertar datos "+ error)
        res.send('Datos insertados correctamente '+results.insertId)
    })
}

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