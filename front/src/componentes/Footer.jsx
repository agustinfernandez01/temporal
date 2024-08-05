import react from "react";
import {Container , Row , Col } from "react-bootstrap"
import "../css/footer.css"

const Footer = () => {
  return (
    <>
      <footer id="footer1" className="text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">© 2024 Temporal. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
};

export default Footer;
