const { conection } = require("../config/DB");



// funciones para propiedades yerba buena
const allPropb = (req, res) => {
  const query = "select * from propiedades where provincia = 'Buenos Aires';";
  conection.query(query, (error, result) => {
    if (error){
        throw error 
    }
    else{
        res.json(result)
    }
  });
};

const singlePropb = (req,res) => {
    const query = 'select * from propiedades where id = ? and provincia = Buenos aires'
    conection.query(query,[id],(error,result)=>{
        if (error){
            throw error
        }
        else{
            res.json(result[0]);
        }
    })
};

module.exports = { allPropb , singlePropb }
