import React from "react";
import "../css/nosotros.css";
import { Container } from "react-bootstrap";

const Nosotros = () => {
  return (
    <>
      <div className="cntn">
        <h1 id="titulon" className="text-center">
          NOSOTROS
        </h1>
        <br />
        <Container className="d-flex justify-content-between">
          <div className="cntcards d-flex flex-column align-items-center text-center p-3">
            <i id="iconos" className="fa-solid fa-users fa-2xl m-4"></i>
            <h3 id="tituloc" className="text-center fw-bold">Experiencia</h3>
            <p className="textosc">
              Con más de 20 años en el mercado inmobiliario, ofrecemos un
              servicio de calidad y confianza.
            </p>
          </div>
          <div className="cntcards d-flex flex-column align-items-center text-center p-3">
            <i className="fa-regular fa-calendar-days fa-2xl m-4"></i>
            <h3 id="tituloc" className="text-center fw-bold">Amplia cartera</h3>
            <p className="textosc">
              Disponemos de una extensa selección de propiedades para satisfacer
              todas tus necesidades.
            </p>
          </div>
          <div className="cntcards d-flex flex-column align-items-center text-center p-3">
            <i className="fa-regular fa-thumbs-up fa-2xl m-4"></i>
            <h3 id="tituloc" className="text-center fw-bold">Satisfacción Garantizada</h3>
            <p className="textosc">
              Nuestro compromiso es encontrar la propiedad perfecta para ti y tu
              familia.
            </p>
          </div>
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

