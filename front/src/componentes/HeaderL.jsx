import "../css/header.css";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar id="header1" className="navbar">
        <a className="navbar-brand mx-auto" href="#">
          <img
            src="src/assets/icono3.png"
            alt="Logo"
            width="75"
            height="60"
            className="d-inline-block align-text-top"
          ></img>
        </a>
      </Navbar>
    </>
  );
};

export default Header;
