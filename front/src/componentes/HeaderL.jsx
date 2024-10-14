import { Link } from "react-router-dom";
import "../css/header.css";
import { Navbar, Button, Container } from "react-bootstrap";
import icono from "../assets/icono1.png";

const Header = () => {
  return (
    <>
      <Navbar id="header1" className="navbar navbar-expand-lg">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <img
              src={icono}
              alt="Logo"
              width="70"
              height="60"
              className="d-inline-block align-text-top"
            />
          </Link>

          <Navbar.Toggle aria-controls="navbarResponsive" />

          <Navbar.Collapse id="navbarResponsive">
            <div className="ms-auto d-flex flex-column flex-lg-row align-items-center">
              <Link to={"/Contactanos"}>
                <Button
                  style={{
                    backgroundColor: "#5e5e5e",
                    borderColor: "#5e5e5e",
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
                    e.currentTarget.style.borderColor = "#5e5e5e";
                  }}
                  className="mt-2 mt-lg-0 m-2"
                >
                  Contacto
                </Button>
              </Link>
              <Link to={"/Zonas"}>
                <Button
                  style={{
                    backgroundColor: "#5e5e5e",
                    borderColor: "#5e5e5e",
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
                    e.currentTarget.style.borderColor = "#5e5e5e";
                  }}
                  className="mt-2 mt-lg-0 m-2"
                >
                  Propiedades
                </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
