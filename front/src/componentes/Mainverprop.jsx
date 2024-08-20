import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Mainverprop = () => {

    const {id} = useParams()

    const [ver,setVer] = useState(null);

    const mostrarprop = async () =>{
        try{
            const response = await axios.get(`http://localhost:8000/propiedades/${id}`);
            setVer(response.data)

        }
        catch(error){
          console.error(error)
        }
    }

    useEffect(()=>{
        mostrarprop();
    },[id])

    if (!ver) return <p>Cargando propiedad...</p>;

  return (
    <div>
        <Container key={ver.id} className='text-center'>
        <h1 className='text-decoration-underline' >Detalles de la propiedad</h1>

        <h5>Titulo</h5>
        <p>{ver.titulo}</p>

        <hr />
        <h5>Descripcion</h5>
        <p>{ver.descripcion}</p>

        <hr />
        <h5>Direccion</h5>
        <p>{ver.direccion}</p>
        
        <hr />
        <h5>Ciudad</h5>
        <p>{ver.ciudad}</p>

        <hr />
        <h5>Provincia</h5>
        <p>{ver.provincia}</p>
        
        <hr />
        <h5>Capacidad</h5>
        <p>{ver.capacidad}</p>
        
        <hr />
        <h5>Habitaciones</h5>
        <p>{ver.habitaciones}</p>
        
        <hr />
        <h5>Baños</h5>
        <p>{ver.baños}</p>
        
        <hr />
        <h5>Tipo de propiedad</h5>
        <p>{ver.tipo}</p>

        <hr />
        <h5>Imagenes</h5>
        <p>{ver.imagenes}</p>

        </Container>
    </div>
  )
}

export default Mainverprop