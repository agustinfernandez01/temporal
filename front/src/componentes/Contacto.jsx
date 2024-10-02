import React from 'react';
import { Container, Form , Button } from "react-bootstrap";
import "../css/contacto.css";

const Contacto = React.forwardRef((props, ref) => {
  return (
    <div id="cnt-c" className="w-100" ref={ref}>
      <Container className="w-50">
        <br />
        <br />
        <h2 id="tltoc" className="text-center">
          CONTACTO
        </h2>
        <Form>
          <div id='' className="mb-3">
            <label id='txtc' htmlFor="exampleInputName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control small-input" // Usa la clase personalizada
              id='txtc'
              aria-describedby="nameHelp"
              placeholder='Tu nombre'
            />
          </div>
          <div className="mb-3">
            <label id='txtc' htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control small-input" // Usa la clase personalizada
              id='txtc'
              aria-describedby="emailHelp"
              placeholder='tu@email.com'
            />
          </div>
          <div className="mb-3">
            <label id='txtc' htmlFor="exampleInputDescription" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control small-textarea" // Usa la clase personalizada
              id='txtc'
              rows="4" // Ajusta la altura del textarea
              placeholder='¿ En que podemos ayudarte ?'
            ></textarea>
          </div>
          <Button id='txtc'
            style={{
              backgroundColor: "#5e5e5e",
              borderColor: "#5e5e5e",
              color: "white",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#FE6F01";
              e.currentTarget.style.borderColor = "#5e5e5e";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#5e5e5e";
              e.currentTarget.style.borderColor = "#5e5e5e";
            }}
            className="mt-auto m-2">
            Enviar
          </Button>
        </Form>
        <br />
        <br />
      </Container>
    </div>
  );
});

export default Contacto;
