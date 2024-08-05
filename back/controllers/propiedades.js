const { conection } = require ( "../config/DB" );

// FUNCIONES QUERY

//FUNCIONES QUERY PARA LA PAGINA CLIENTE (SOLO SE MUESTRA) TUCUMAN
const allProp = ( req , res ) => {
  const query = "select * from propiedades where provincia = 'Tucuman';";
  conection.query( query , ( error , results ) => { /*Este primer parámetro del callback siempre se utiliza para pasar cualquier error que ocurra durante la ejecución de la consulta. Lo importante es la posición del parámetro, no su nombre. */
    if ( error ) throw error;
    res.json( results );
  });
};

const singleProp = ( req , res) => {
  const query = "select * from propiedades where provincia = 'Tucuman' and id = ?";
  const { id } = req.params
  conection.query( query , [id] ,( error , results ) => {
    if ( error ) throw error; // si hay algun error en la consulta tira error
    res.json( results[0] ); // porque se lo pone en un array al resultado ?
  });
};
//FIN FUNCIONES QUERY PARA LA PAGINA CLIENTE (SOLO SE MUESTRA)

module.exports = { singleProp , allProp };
