import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button , Container , Row , Col} from "react-bootstrap";
import { Link } from "react-router-dom";

const Mainbsas = () => {
  const [buenosaires, setBuenosaires] = useState([]);

  const mostrarPropiedadesb = async () => {
    try {
      const response = await axios.get("http://localhost:8000/propiedadesb");
      setBuenosaires(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("error en la peticion");
    }
  };

  useEffect(() => {
    mostrarPropiedadesb();
  }, []);

  return (
    <div>
      <br />
      <Container>
        <h2 className="text-center text-decoration-underline">
          Nuestras propiedades en Buenos Aires
        </h2>
      </Container>
      <br />
      <Container>
        <Row>
          {buenosaires.map((propiedadb) => (
            <Col
              key={propiedadb.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4"
            >
              <Card style={{ width: "100%", height: "100%" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{propiedadb.titulo}</Card.Title>
                  <Card.Text>{propiedadb.descripcion}</Card.Text>
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
