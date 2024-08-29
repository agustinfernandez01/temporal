import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tucuman from "../pages/zonas/Tucuman";

const Mainlanding = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={11} className="mx-auto">
            <br />
            <Container id="Nosotros">
              <br />
              <Card
                className="p-4 shadow-sm"
                style={{ backgroundColor: "#f8f9fa", borderColor: "#e3e3e3" }}
              >
                <Card.Body>
                  <h4 className="text-center text-decoration-none fw-bold">
                    Descubre tu Estancia Perfecta con{" "}
                    <span style={{ color: "#FE6F01" }}>Temporal </span>!
                  </h4>
                  <br />
                  <p className="text-large text-center">
                    Ofrecemos alquileres temporales ideales para vacaciones,
                    viajes de negocios o estadías cortas. Nuestra prioridad es
                    brindarte comodidad y un servicio personalizado que se
                    ajuste a tus necesidades. ¡Estamos aquí para hacer tu
                    estancia inolvidable!
                    <br />
                    <br />- En Temporal, tu comodidad y satisfacción son nuestra
                    prioridad.
                  </p>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
        <br />
        {/* Cards con Zonas */}
        <Container className="my-4">
          <Card
            className="p-4 shadow-sm"
            style={{
              backgroundColor: "#f8f9fa",
              borderColor: "#e3e3e3",
              borderRadius: "10px",
            }}
          >
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/id/1137375765/es/foto/casa-del-gobierno-de-tucum%C3%A1n-oficina-p%C3%BAblica-local-san-miguel-de-tucuman-argentina.jpg?s=1024x1024&w=is&k=20&c=kBzqQqzjhVRiyS5Y02JWxHPNHL-ccm86R7HCXjT_a2o="
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>Tucuman</Card.Title>
                    <Card.Text className="flex-grow-1">
                      Tucumán es una ciudad en el noroeste de Argentina,
                      conocida por su clima agradable y su ambiente acogedor. Es
                      ideal para vivir, con buenos servicios y un entorno verde.
                    </Card.Text>
                    <Link to={"/Tucuman"} style={{ textDecoration: "none" }}>
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
                        className="mt-auto"
                      >
                        Ver propiedades
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/05/10/16837113541343.jpg"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>Buenos Aires</Card.Title>
                    <Card.Text className="flex-grow-1">
                      Buenos Aires es la capital de Argentina, conocida por su
                      vibrante vida urbana y su rica cultura. Ofrece una amplia
                      variedad de servicios, entretenimiento y un ambiente
                      dinámico, ideal para vivir en el corazón de la ciudad.
                    </Card.Text>
                    <Link
                      to={"/Buenosaires"}
                      style={{ textDecoration: "none" }}
                    >
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
                        className="mt-auto"
                      >
                        Ver propiedades
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Card>
        </Container>
        <br />
        <hr />
        <br />
      </Container>
    </>
  );
};

export default Mainlanding;
