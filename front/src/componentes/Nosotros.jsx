import React from "react";
import "../css/nosotros.css";
import { Container, Row, Col } from "react-bootstrap";

const Nosotros = () => {
  return (
    <>
      <div className="cntn">
        <h1 id="titulon" className="text-center">
          NOSOTROS
        </h1>
        <br />
        <Container>
          <Row>
            {/* Primera Tarjeta */}
            <Col xs={12} md={4} className="d-flex flex-column align-items-center text-center p-3">
              <div className="cntcards" style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px" }}>
                <i id="iconos" className="fa-solid fa-users fa-2xl m-4"></i>
                <h3 id="tituloc" className="text-center">Experiencia</h3>
                <p className="textosc">
                  Con más de 20 años en el mercado inmobiliario, ofrecemos un servicio de calidad y confianza.
                </p>
              </div>
            </Col>

            {/* Segunda Tarjeta */}
            <Col xs={12} md={4} className="d-flex flex-column align-items-center text-center p-3">
              <div className="cntcards" style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px" }}>
                <i className="fa-regular fa-calendar-days fa-2xl m-4"></i>
                <h3 id="tituloc" className="text-center">Amplia cartera</h3>
                <p className="textosc">
                  Disponemos de una extensa selección de propiedades para satisfacer todas tus necesidades.
                </p>
              </div>
            </Col>

            {/* Tercera Tarjeta */}
            <Col xs={12} md={4} className="d-flex flex-column align-items-center text-center p-3">
              <div className="cntcards" style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px" }}>
                <i className="fa-regular fa-thumbs-up fa-2xl m-4"></i>
                <h3 id="tituloc" className="text-center">Satisfacción Garantizada</h3>
                <p className="textosc">
                  Nuestro compromiso es encontrar la propiedad perfecta para ti y tu familia.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container id="txtemp" className="text-center">
          <p id="texton">
            En Temporal Home, nos dedicamos a hacer realidad tus sueños de encontrar el hogar perfecto. Nuestro equipo está comprometido con brindarte un servicio personalizado y de calidad en cada paso del proceso de compra, venta o alquiler de propiedades.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Nosotros;

