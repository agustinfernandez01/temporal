import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Para obtener el id y redirigir después
import { Form, Button , Container } from "react-bootstrap";

const ActualizarPropiedad = () => {
  const { id } = useParams(); // El ID de la propiedad a actualizar
  const navigate = useNavigate(); // Para redirigir después de actualizar

  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    direccion: "",
    provincia: "",
    capacidad: "",
    habitaciones: "",
    baños: "",
    tipo: "",
  });

  // Cargar los datos de la propiedad para mostrarlos en el formulario
  useEffect(() => {
    axios
      .get(`http://localhost:8000/propiedades/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la propiedad:", error);
      });
  }, [id]);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Enviar la actualización al backend
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    axios
      .put(`http://localhost:8000/update/${id}`, formData)
      .then((response) => {
        alert("PROPIEDAD ACTUALIZADA !")
        navigate("/admin"); // Redirigir a la lista de propiedades después de actualizar
      })
      .catch((error) => {
        console.error("Error al actualizar la propiedad:", error);
      });
  };

  return (
    <div>
      <Container>
      <h1>Actualizar Propiedad</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitulo">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formDireccion">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Resto de los campos */}
          <Form.Group controlId="formProvincia">
            <Form.Label>Provincia</Form.Label>
            <Form.Control
              type="text"
              name="provincia"
              value={formData.provincia}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formCapacidad">
            <Form.Label>Capacidad</Form.Label>
            <Form.Control
              type="number"
              name="capacidad"
              value={formData.capacidad}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formHabitaciones">
            <Form.Label>Habitaciones</Form.Label>
            <Form.Control
              type="number"
              name="habitaciones"
              value={formData.habitaciones}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBaños">
            <Form.Label>Baños</Form.Label>
            <Form.Control
              type="number"
              name="baños"
              value={formData.baños}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formTipo">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              type="text"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
            />
          </Form.Group>
          <br />

          <Button variant="primary" type="submit">
            Actualizar Propiedad
          </Button>
        </Form>
        <br /><br />
      </Container>
    </div>
  );
};

export default ActualizarPropiedad;
