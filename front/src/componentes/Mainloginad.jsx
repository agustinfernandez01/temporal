import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import "../css/loginad.css";
import { useNavigate } from "react-router-dom";

const Mainloginad = () => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === "marianaremonda1234" && pass === "ciro1234") {
      alert("usuario correcto");
      navigate("/admin");
    } else {
      alert("usuario incorrecto");
    }
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Form
          id="formulario"
          onSubmit={handleSubmit}
          className="p-4 border rounded shadow-lg bg-light"
        >
          <h3 className="text-center mb-4">Login Admin</h3>
          <FormGroup className="mb-3">
            <FormLabel>Usuario</FormLabel>
            <FormControl
              type="text"
              placeholder="Ingresa tu usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="border-primary"
              required
            />
          </FormGroup>
          <FormGroup className="mb-4">
            <FormLabel>Contraseña</FormLabel>
            <FormControl
              type="password"
              placeholder="Ingresa tu contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="border-primary"
              required
            />
          </FormGroup>
          <Button type="submit" className="w-100 btn-primary">
            Ingresar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Mainloginad;
