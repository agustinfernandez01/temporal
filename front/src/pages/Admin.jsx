import React from "react";
import Mainadmin from "../componentes/Mainadmin";
import { Container } from "react-bootstrap";

const Admin = () => {
  return (
    <>
      <Container>
        <h1 className="text-decoration-underline">ADMINISTRADOR TEMPORAL</h1>
        <h4>Editar, agregar, eliminar y actualizar propiedades</h4>
      </Container>
      <Mainadmin />
    </>
  );
};

export default Admin;
