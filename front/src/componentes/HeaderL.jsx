import { Link } from "react-router-dom";
import "../css/header.css";
import { Navbar } from "react-bootstrap"
import icono from '../assets/icono1.png'; 

const Header = () => {
  return (
    <>
      <Navbar id="header1" className="navbar">
        <Link to="/" className="navbar-brand mx-auto" href="#">
          <img
            src={icono}
            alt="Logo"
            width="70"
            height="60"
            className="d-inline-block align-text-top"
          ></img>
        </Link>
      </Navbar>
    </>
  );
};

export default Header;
