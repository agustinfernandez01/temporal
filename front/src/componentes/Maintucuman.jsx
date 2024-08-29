import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, Button, Row, Col, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";

const Maintucuman = () => {
  const [tucuman, setTucuman] = useState([]);

  const mostrarInmuebles = async () => {
    try {
      const response = await axios.get("http://localhost:8000/propiedades");
      setTucuman(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener las propiedades: " + error);
    }
  };

  useEffect(() => {
    mostrarInmuebles();
  }, []);

  return (
    <div>
      <br />
      <Container>
        <h3 className="text-center text-decoration-none fw-bold">
          Nuestras propiedades en Tucuman
        </h3>
      </Container>
      <br />
      <Container>
        <Row>
          {tucuman.map((inmueble) => (
            <Col key={inmueble.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="d-flex flex-column" style={{ width: "100%", height: "100%" }}>
                <CardImg
                  variant="top"
                  src={
                    inmueble.imagenes && inmueble.imagenes.length > 0
                      ? `data:${inmueble.imagenes[0].type};base64,${inmueble.imagenes[0].data}`
                      : "path/to/default-image.jpg"
                  }
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{inmueble.titulo}</Card.Title>
                  <Card.Text className="flex-grow-1">{inmueble.descripcion}</Card.Text>
                  <Link to={`/propiedadest/${inmueble.id}`}>
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
