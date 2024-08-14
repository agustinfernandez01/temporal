import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
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
  <Container>
    <h2 className="text-center text-decoration-underline">
      Nuestras propiedades en Tucuman
    </h2>
  </Container>
  <br />
  <Container>
    <Row>
      {tucuman.map((hola) => (
        <Col key={hola.id} xs={12} sm={6} md={4} lg={3} className="mb-4"> {/* mb-4 en Col */}
          <Card
            style={{ width: "100%", height: "100%" }}
          >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{hola.titulo}</Card.Title>
              <Card.Text>{hola.descripcion}</Card.Text>
              <Link to={`/propiedadest/${hola.id}`}>
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
        </Col>
      ))}
    </Row>
  </Container>
</div>
  );
};

export default Maintucuman;
