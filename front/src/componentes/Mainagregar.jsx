import React from "react";
import { Button , Form , Container } from 'react-bootstrap'
import '../css/contenedor.css'

const Mainagregar = () => {
  return (
    <div>

        <Container id="contenedoradd">
        <h1>Agregar Propiedad</h1>
      <Form>
        {/* TITULO */}
        <Form.Group className="mb-3">
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        {/* DESCRIPCION */}
        <Form.Group className="mb-3" >
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="description" />
        </Form.Group>
        {/* DIRECCION */}
        <Form.Group className="mb-3" >
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="description" />
        </Form.Group>
        {/* CIUDAD */}
        <Form.Group className="mb-3" >
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="description" />
        </Form.Group>
        {/* PROVINCIA */}
        <Form.Group controlId="formSelect">
          <Form.Label>Provincia</Form.Label>
          <Form.Select required>
            <option value="Tucuman">Tucuman</option>
            <option value="Buenos Aires">Buenos Aires</option>
          </Form.Select>
        </Form.Group>
        <br />
        {/* CAPACIDAD */}
        <Form.Group controlId="formSelect">
          <Form.Label>Capacidad {"(Nro de personas)"}</Form.Label>
          <Form.Select required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Form.Select>
        </Form.Group>
        <br />
        {/* HABITACIONES */}
        <Form.Group controlId="formSelect">
          <Form.Label>Habitaciones</Form.Label>
          <Form.Select required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Form.Select>
        </Form.Group>
        <br />
        {/* BAÑOS */}
        <Form.Group controlId="formSelect">
          <Form.Label>Baños</Form.Label>
          <Form.Select required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <br />
        {/* TIPO */}
        <Form.Group controlId="formSelect">
          <Form.Label>Tipo</Form.Label>
          <Form.Select required>
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
          </Form.Select>
        </Form.Group>
        <br />
        {/* IMAGENES */}
        <Form.Label>Imagenes</Form.Label>
        <Form.Group controlId="formFile">
          <Form.Control type="file" />
        </Form.Group>
        <br />
        <Button className="btn-success" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </div>
  );
};

export default Mainagregar;
