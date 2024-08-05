import React, { useEffect , useState } from 'react'
import axios from 'axios'
import {Card,Button} from 'react-bootstrap'


const Mainbsas = () => {

    const [ buenosaires , setBuenosaires ] = useState([])

    const mostrarPropiedadesb = async () =>{
        try{
            const response = await axios.get("http://localhost:8000/propiedadesb")
            setBuenosaires(response.data)
            console.log(response.data)
        }
        catch(error){
        console.error("error en la peticion") 
        }
    }

    useEffect(()=>{
        mostrarPropiedadesb();
    },[])

  return (
    <div>
        <h1>Nuestras propiedades en Tucuman</h1>

        {buenosaires.map((propiedadb) => (
                  <Card key={propiedadb.id} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{propiedadb.titulo}</Card.Title>
                    <Card.Text>
                      {propiedadb.descripcion}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

        ))}
    </div>
  )
}

export default Mainbsas