import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mainbsas = () => {
  const [buenosaires, setBuenosaires] = useState([]);

  const mostrarPropiedadesb = async () => {
    try {
      const response = await axios.get("http://localhost:8000/propiedadesb");
      setBuenosaires(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener las propiedades: " + error);
    }
  };

  useEffect(() => {
    mostrarPropiedadesb();
  }, []);

  return (
    <div>
      <br />
      <Container>
        <h3 className="text-center text-decoration-none fw-bold">
          Nuestras propiedades en Buenos Aires
        </h3>
      </Container>
      <br />
      <Container>
        <Row>
          {buenosaires.map((propiedadb) => (
            <Col key={propiedadb.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className='d-flex flex-column' style={{ width: "100%", height: "100%" }}>
                <CardImg
                  variant="top"
                  src={
                    propiedadb.imagenes && propiedadb.imagenes.length > 0
                      ? `data:${propiedadb.imagenes[0].type};base64,${propiedadb.imagenes[0].data}`
                      : "path/to/default-image.jpg" // Reemplaza con la ruta de la imagen predeterminada si es necesario
                  }
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{propiedadb.titulo}</Card.Title>
                  <Card.Text className="flex-grow-1">{propiedadb.descripcion}</Card.Text>
                  <Link to={`/propiedadesb/${propiedadb.id}`}>
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

export default Mainbsas;
