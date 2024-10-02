import { Link } from "react-router-dom";
import "../css/header.css";
import { Navbar, Button } from "react-bootstrap";
import icono from "../assets/icono1.png";

const Header = () => {
  return (
    <>
      <Navbar id="header1" className="navbar">
        <Link to="/" className="navbar-brand">
          <img
            src={icono}
            alt="Logo"
            width="70"
            height="60"
            className="d-inline-block align-text-top"
          />
        </Link>

        <div className="ms-auto">
          <Link to={"/Contactanos"}>
            <Button
              style={{
                backgroundColor: "#5e5e5e",
                borderColor: "#5e5e5e",
                color: "white",
                fontFamily: "Kanit",
                fontWeight: 200,
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
              Contacto
            </Button>
          </Link>
          <Link to={"/Zonas"}>
            <Button
              style={{
                backgroundColor: "#5e5e5e",
                borderColor: "#5e5e5e",
                color: "white",
                fontFamily: "Kanit",
                fontWeight: 200,
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
              Propiedades
            </Button>
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
