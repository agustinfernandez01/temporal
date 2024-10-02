import { Container, Row, Col, Button, Card } from "react-bootstrap";
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
        <div className="position-absolute top-0 start-50 translate-middle-x text-white text-center">
          <br />
          <br />
          <br />
          <br />
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
                fontFamily: "Kanit",
                fontWeight: 200
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
        </div>
      </div>
      <br />
      {/* Cards con Zonas */}
      <Nosotros />
      <br />
      <br />
      <Contacto />
    </>
  );
};

export default Mainlanding;
