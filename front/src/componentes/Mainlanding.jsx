import React from "react";
import { Container, Row , Col , Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Tucuman from "../pages/zonas/Tucuman";

const Mainlanding = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={5} className="mx-auto">
            <h1>Tempor.ar, alquileres temporales en Tucuman</h1>
            <p>
              Encontra el alojamiento que estas buscando para una estadia de
              calidad!
            </p>
            <hr />
          </Col>
        </Row>
        <br />
        {/* Cards con Zonas */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            {/* Yerba Buena */}
            <div className="card">
              <img src="https://media.istockphoto.com/id/1137375765/es/foto/casa-del-gobierno-de-tucum%C3%A1n-oficina-p%C3%BAblica-local-san-miguel-de-tucuman-argentina.jpg?s=1024x1024&w=is&k=20&c=kBzqQqzjhVRiyS5Y02JWxHPNHL-ccm86R7HCXjT_a2o=" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tucuman</h5>
                <p className="card-text">
                Tucumán es una ciudad en el noroeste de Argentina, conocida por su clima agradable y su ambiente acogedor. Es ideal para vivir, con buenos servicios y un entorno verde.
                </p>
              </div>
              <Link to={"/Tucuman"} className="mx-auto mb-2" style={{ textDecoration: 'none' }}><Button style={{ backgroundColor: '#FE6F01', borderColor: 'orange', color: 'white', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#5e5e5e'; e.currentTarget.style.borderColor = '#5e5e5e'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#FE6F01'; e.currentTarget.style.borderColor = 'orange';}}>
                Ver</Button></Link>
            </div>
          </div>
          <div className="col">
            {/* San Miguel de tucuman */}
            <div className="card">
              <img src="https://blogskystorage.s3.amazonaws.com/2021/07/skyairline_skyairline_image_182.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Buenos aires</h5>
                <p className="card-text">
                Buenos Aires es la capital de Argentina, conocida por su vibrante vida urbana y su rica cultura. Ofrece una amplia variedad de servicios, entretenimiento y un ambiente dinámico, ideal para vivir en el corazón de la ciudad.
                </p>
              </div>
              <Link to={"/Buenosaires"} className="mx-auto mb-2" style={{ textDecoration: 'none' }}><Button style={{ backgroundColor: '#FE6F01', borderColor: 'orange', color: 'white', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#5e5e5e'; e.currentTarget.style.borderColor = '#5e5e5e'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#FE6F01'; e.currentTarget.style.borderColor = 'orange';}}>
                Ver</Button></Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Mainlanding;
