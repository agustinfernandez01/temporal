import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Maintucuman = () => {
  const [tucuman, setTucuman] = useState([]);

  const mostrarPropiedades = async () => {
    try {
      const response = await axios.get('http://localhost:8000/propiedades');
      setTucuman(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener las propiedades: " + error);
    }
  };

  useEffect(() => {
    mostrarPropiedades();
  }, []);

  return (
    <div>
      <h3>{tucuman.titulo}</h3>

      {tucuman.map((hola) => (
        <Card key={hola.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{hola.titulo}</Card.Title>
            <Card.Text>
              {hola.descripcion}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}

      <h2>{tucuman.titulo}</h2>
    </div>
  );
};

export default Maintucuman;
