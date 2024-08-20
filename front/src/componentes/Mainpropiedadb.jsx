import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Mainpropiedadb = () => {
  const { id } = useParams();
  const [propb, setPropb] = useState(null);

  const singlepropbs = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/propiedadesb/${id}`
      );
      setPropb(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al encontrar propiedades " + error);
    }
  };

  useEffect(() => {
    if (id) {
      singlepropbs();
    }
  }, [id]);

  if (propb === null) {
    return <p>Cargando propiedad...</p>;
  }

  // Verifica si hay imágenes para mostrar y asegúrate de que `imagenes` es un array
  let imagenes = Array.isArray(propb.imagenes) ? propb.imagenes : [];

  return (
    <div>
      {propb ? (
        <>
          <Container>
            <h1>{propb.titulo}</h1>
            <br />
            {/* IMÁGENES */}
            <Container>
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  {imagenes.length > 0 ? (
                    imagenes.map((imagen, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <img
                          src={`data:${imagen.type};base64,${imagen.data}`}
                          className="d-block w-100"
                          alt={`Imagen ${index + 1}`}
                          style={{
                            objectFit: "contain",
                            height: "auto",
                            maxHeight: "500px",
                          }}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="carousel-item active">
                      <img
                        src="path/to/default-image.jpg" // Puedes poner una imagen por defecto si no hay imágenes
                        className="d-block w-100"
                        alt="Imagen predeterminada"
                        style={{
                          objectFit: "contain",
                          height: "auto",
                          maxHeight: "500px",
                        }}
                      />
                    </div>
                  )}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </Container>

            <hr />

            <Container className="p-4 border rounded shadow-sm">
              <h2>
                {propb.tipo} | {propb.direccion}
              </h2>
              <p>
                {propb.capacidad} {"personas"} • {propb.habitaciones}{" "}
                {"habitaciones"} • {propb.baños} {"baños"}
              </p>
              <p>{propb.descripcion}</p>
              <h3>Servicios que ofrece :</h3>
              <p>{propb.servicios}</p>
            </Container>

            <hr />
            <Container className="p-4 border rounded shadow-sm">
              <h3>Consultar por esta propiedad:</h3>
              <a
                href={`https://wa.me/5493814151764?text=%20Hola!%20me%20gustaria%20saber%20más%20sobre%20la%20propiedad:%20${propb.titulo}.%20Muchas%20gracias!`}
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp fa-xl"></i>
              </a>
            </Container>
          </Container>
        </>
      ) : (
        <p>Propiedad no encontrada</p>
      )}
    </div>
  );
};

export default Mainpropiedadb;
