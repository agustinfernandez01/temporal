import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contacto from "./Contacto";
import Nosotros from "./Nosotros";
import "../css/mainlanding.css";

const Mainlanding = () => {
  
  return (
    <>
      <div id="imgcamp" className="position-relative">
        <img
          className="img-fluid w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="src/assets/gris2.png"
          alt=""
        />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <Container>
            <Row>
              <Col>
                <h1 id="titulo1" className="text-white">
                  TEMPORAL HOME
                </h1>
                <h4 id="titulo2" className="text-white">
                  Descubre las mejores propiedades en tu área
                </h4>
                <br />
                <Link to="/Zonas">
                  <Button
                    style={{
                      backgroundColor: "#5e5e5e",
                      borderColor: "orange",
                      color: "white",
                      fontFamily: "Lato",
                      fontWeight: 400,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#FE6F01";
                      e.currentTarget.style.borderColor = "#5e5e5e";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#5e5e5e";
                      e.currentTarget.style.borderColor = "none";
                    }}
                    className="mt-auto m-2"
                  >
                    Ver Propiedades
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <br />

      {/* Sección de Nosotros y Contacto */}
      <Container>
        <Row>
          <Col>
            <Nosotros />
          </Col>
        </Row>
      </Container>

      <br />
      <br />

        <Row>
          <Col>
            <Contacto />
          </Col>
        </Row>
    </>
  );
};

export default Mainlanding;
