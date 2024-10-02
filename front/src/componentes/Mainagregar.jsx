import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import "../css/contenedor.css";
import axios from "axios";

const Mainagregar = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [capacidad, setCapacidad] = useState("");
  const [habitaciones, setHabitaciones] = useState("");
  const [baños, setBaños] = useState("");
  const [tipo, setTipo] = useState("");
  const [servicios, setServicios] = useState(""); // Nuevo estado para servicios
  const [imagenes, setImagenes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("direccion", direccion);
    formData.append("ciudad", ciudad);
    formData.append("provincia", provincia);
    formData.append("capacidad", capacidad);
    formData.append("habitaciones", habitaciones);
    formData.append("baños", baños);
    formData.append("tipo", tipo);
    formData.append("servicios", servicios); // Agregar servicios a FormData

    // Agregar múltiples imágenes al FormData
    for (let i = 0; i < imagenes.length; i++) {
      formData.append("imagenes", imagenes[i]);
    }

    try {
      const response = await axios.post(
        `http://localhost:8000/insert`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Datos enviados correctamente: " + response.data);
    } catch (error) {
      alert("Error al enviar datos: " + error);
    }
  };

  const handleFileChange = (e) => {
    // Convertir el FileList a un array
    const filesArray = Array.from(e.target.files);
    setImagenes(filesArray);
  };

  return (
    <div>
      <Container id="contenedoradd">
        <h1>Agregar Propiedad</h1>
        <Form onSubmit={handleSubmit}>
          {/* TITULO */}
          <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </Form.Group>
          {/* DESCRIPCION */}
          <Form.Group className="mb-3">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </Form.Group>
          {/* DIRECCION */}
          <Form.Group className="mb-3">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </Form.Group>
          {/* SERVICIOS */}
          <Form.Group className="mb-3"> {/* Nuevo campo de servicios */}
            <Form.Label>Servicios</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setServicios(e.target.value)}
              required
            />
          </Form.Group>
          {/* CIUDAD */}
          <Form.Group className="mb-3">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCiudad(e.target.value)}
              required
            />
          </Form.Group>
          {/* PROVINCIA */}
          <Form.Group controlId="formSelect1">
            <Form.Label>Provincia</Form.Label>
            <Form.Select
              value={provincia}
              required
              onChange={(e) => setProvincia(e.target.value)}
            >
              <option value="">Selecciona una provincia</option>
              <option value="Tucuman">Tucuman</option>
              <option value="Buenos Aires">Buenos Aires</option>
            </Form.Select>
          </Form.Group>
          <br />
          {/* CAPACIDAD */}
          <Form.Group controlId="formSelect2">
            <Form.Label>Capacidad {"(Nro de personas)"}</Form.Label>
            <Form.Select
              value={capacidad}
              required
              onChange={(e) => setCapacidad(e.target.value)}
            >
              <option value="">
                Selecciona la capacidad de huespedes de la propiedad
              </option>
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
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
            </Form.Select>
          </Form.Group>
          <br />
          {/* HABITACIONES */}
          <Form.Group controlId="formSelect3">
            <Form.Label>Habitaciones</Form.Label>
            <Form.Select
              value={habitaciones}
              required
              onChange={(e) => setHabitaciones(e.target.value)}
            >
              <option value="">
                Selecciona el numero de habitaciones de la propiedad
              </option>
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
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
            </Form.Select>
          </Form.Group>
          <br />
          {/* BAÑOS */}
          <Form.Group controlId="formSelect4">
            <Form.Label>Baños</Form.Label>
            <Form.Select
              value={baños}
              required
              onChange={(e) => setBaños(e.target.value)}
            >
              <option value="">Seleccione el numero de baños</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </Form.Select>
          </Form.Group>
          <br />
          {/* TIPO */}
          <Form.Group controlId="formSelect5">
            <Form.Label>Tipo</Form.Label>
            <Form.Select
              value={tipo}
              required
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="">Seleccion el tipo de vivienda</option>
              <option value="Casa">Casa</option>
              <option value="Departamento">Departamento</option>
            </Form.Select>
          </Form.Group>
          <br />
          {/* IMAGENES */}
          <Form.Group controlId="formFile">
            <Form.Label>Imagenes</Form.Label>
            <Form.Control type="file" multiple onChange={handleFileChange} />
          </Form.Group>
          <br />
          <Button className="btn-success" type="submit">
            Agregar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Mainagregar;
