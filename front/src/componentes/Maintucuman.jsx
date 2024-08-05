import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Maintucuman = () => {
  const [tucuman, setTucuman] = useState([]);

  const mostrarPropiedades = async () => {
    try {
      const response = await axios.get("http://localhost:8000/propiedades");
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
    /* LISTAS DE PROPIEDADES */
    <div>
      <br />
      {tucuman.map((hola) => (
        <Card key={hola.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{hola.titulo}</Card.Title>
            <Card.Text>{hola.descripcion}</Card.Text>
            <Link to={`/propiedadest/${hola.id}`}> {/* sale undefined en navegador y va al componente que quiero. porque? */}
              <Button
                style={{
                  backgroundColor: "#FE6F01",
                  borderColor: "orange",
                  color: "white",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#5e5e5e";
                  e.currentTarget.style.borderColor = "#5e5e5e";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#FE6F01";
                  e.currentTarget.style.borderColor = "orange";
                }}
              >
                Ver propiedad
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Maintucuman;
