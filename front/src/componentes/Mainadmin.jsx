import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { Container , Table , Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Mainadmin = () => {
  const [adprop, setAdprop] = useState([]);

  const mostrarpropsAd = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admin");
      setAdprop(response.data);
    } catch (error) {
      alert("No hay propiedades, agrega una.");
    }
  };

  const eliminarProp = async (id) => {  
    try{
      await axios.delete(`http://localhost:8000/delete/${id}`)
      // Actualizar la lista de propiedades después de la eliminación
      setAdprop(adprop.filter(propiedad => propiedad.id !== id));
    }
    catch (error){
      alert("Error en eliminar la propiedad")
    }
  }

  useEffect(() => {
    mostrarpropsAd();
  }, []);

  return (
    <>
      <Container>
        <hr />
        <Link to='/agregar' ><Button className="btn-success">Agregar</Button></Link>
        <br />
        <br />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Provincia</th>
              <th>Direccion</th>
              <th>Tipo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {adprop.map((propiedadad) => (
            <tbody key={propiedadad.id}>
              <tr>
                <td>{propiedadad.id}</td>
                <td>{propiedadad.provincia}</td>
                <td>{propiedadad.direccion}</td>
                <td>{propiedadad.tipo}</td>
                <td>
                <Link to={`/admin/ver/${propiedadad.id}`} ><Button className="btn-success" >Ver</Button></Link>
                <Button className="btn-primary m-1 ">Editar</Button>
                <Button className="btn-danger" onClick={()=>{eliminarProp(propiedadad.id)}}>Eliminar</Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

      </Container>
    </>
  );
};

export default Mainadmin;
