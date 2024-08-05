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


module.exports = { allPropsad }
