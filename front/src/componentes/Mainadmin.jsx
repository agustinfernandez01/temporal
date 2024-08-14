import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

const Mainadmin = () => {
  const [adprop, setAdprop] = useState([]);
  const navigate = useNavigate(); // Definir navigate fuera de handleClick

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
      await axios.delete(`http://localhost:8000/delete/${id}`);
      // Actualizar la lista de propiedades después de la eliminación
      setAdprop(adprop.filter(propiedad => propiedad.id !== id));
    } catch (error) {
      alert("Error en eliminar la propiedad");
    }
  }

  const handleClick = (propiedadad) => {
    if (propiedadad.provincia === "Buenos Aires") {
      navigate(`/admin/verb/${propiedadad.id}`);
    } else if(propiedadad.provincia === "Tucuman") {
      navigate(`/admin/ver/${propiedadad.id}`);
    }
  };

  useEffect(() => {
    mostrarpropsAd();
  }, []);

  return (
    <>
      <Container>
        <hr />
        <Link to='/agregar'><Button className="btn-success">Agregar</Button></Link>
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
                  <Button className="btn-success" onClick={() => handleClick(propiedadad)}>Ver</Button>
                  <Button className="btn-primary m-1">Editar</Button>
                  <Button className="btn-danger" onClick={() => eliminarProp(propiedadad.id)}>Eliminar</Button>
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
