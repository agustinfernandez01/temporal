import react from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/footer.css";
import icono from "../assets/icono1.png";

const Footer = () => {
  return (
    <>
      <footer id="footer1" className="text-white mt-5 p-4">
        <Row className="d-flex align-items-center">
          <Col className="d-flex justify-content-between align-items-center">
            {" "}
            {/* Distribuye el contenido entre texto y íconos */}
            <Col>
              <p style={{
                color: "white",
                fontFamily: "Kanit",
                fontWeight: 200,
              }}className="m-0 text-start">© 2024 Temporal.</p>
            </Col>
            <div className="d-flex">
              <a
                href="https://www.instagram.com/temporal_home/"
                style={{ color: "inherit", textDecoration: "none" }}
                target="_blank"
              >
                <i className="fa-brands fa-instagram fa-xl m-2"></i>
              </a>
              <a
                href={`https://wa.me/5493814151764`}
                style={{ color: "inherit", textDecoration: "none" }}
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp fa-xl m-2"></i>
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default Footer;
