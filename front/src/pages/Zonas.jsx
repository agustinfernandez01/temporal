import React from "react";
import Header from "../componentes/HeaderL";
import Footer from "../componentes/Footer";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/zonas.css";

const Zonas = () => {
  return (
    <>
      <Header />
      <h1 id="tituloz" className="text-center">
        BUSCA A PARTIR DE NUESTRAS ZONAS
      </h1>
      <Container className="d-flex">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://eqfsewpc7rt.exactdn.com/wp-content/uploads/2022/12/Casa_de_la_independencia_Tucuman.jpg"
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "Kanit",
                    fontWeight: 300,
                  }}
                  id="tituloc"
                  className="fw-bold"
                >
                  TUCUMAN
                </Card.Title>

                <Card.Text
                  style={{
                    fontFamily: "Kanit",
                    fontWeight: 300,
                  }}
                >
                  Tucumán es un centro estratégico en el noroeste argentino,
                  destacándose por su crecimiento urbano, excelente
                  infraestructura y oportunidades de inversión inmobiliaria.
                </Card.Text>
                <Link to="/Tucuman">
                  <Button
                    style={{
                      backgroundColor: "#5e5e5e",
                      borderColor: "#5e5e5e",
                      color: "white",
                      fontFamily: "Kanit",
                      fontWeight: 300,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#FE6F01";
                      e.currentTarget.style.borderColor = "#5e5e5e";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#5e5e5e";
                      e.currentTarget.style.borderColor = "#5e5e5e";
                    }}
                    className="mt-auto m-2"
                  >
                    Ver Propiedades
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://media.timeout.com/images/106140940/750/562/image.jpg"
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title id="tituloc">BUENOS AIRES</Card.Title>
                <Card.Text style={{
                    fontFamily: "Kanit",
                    fontWeight: 300,
                  }}>
                  Buenos Aires, capital cosmopolita de Argentina, ofrece
                  excelentes oportunidades inmobiliarias gracias a su
                  conectividad y desarrollo constante.
                </Card.Text>
                <Link to="/buenosaires">
                  <Button
                    style={{
                      backgroundColor: "#5e5e5e",
                      borderColor: "#5e5e5e",
                      color: "white",
                      fontFamily: "Kanit",
                    fontWeight: 300,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#FE6F01";
                      e.currentTarget.style.borderColor = "#5e5e5e";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#5e5e5e";
                      e.currentTarget.style.borderColor = "#5e5e5e";
                    }}
                    className="mt-auto m-2"
                  >
                    Ver Propiedades
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Zonas;
