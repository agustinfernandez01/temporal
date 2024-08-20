import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../css/propiedad1.css";

const Mainpropiedad = () => {
  const { id } = useParams();
  const [papel, setPapel] = useState(null);

  const singleprop = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/propiedades/${id}`);
      setPapel(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("No se encontró la propiedad " + error);
    }
  };

  useEffect(() => {
    if (id) {
      singleprop();
    }
  }, [id]);

  if (papel === null) {
    return <p>Cargando propiedad...</p>;
  }

  // Verifica si hay imágenes para mostrar y asegúrate de que `imagenes` es un array
  let imagenes = Array.isArray(papel.imagenes) ? papel.imagenes : [];

  return (
    <div>
      {papel ? (
        <>
          <Container>
            <h1>{papel.titulo}</h1>
            <br />
            {/* IMÁGENES */}
            <Container>
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  {imagenes.length > 0 ? (
                    imagenes.map((imagen, index) => (
                      <div
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        key={index}
                      >
                        <img
                          src={`data:${imagen.type};base64,${imagen.data}`}
                          className="d-block w-100"
                          alt={`Imagen ${index + 1}`}
                          style={{ objectFit: 'contain', height: 'auto', maxHeight: '500px' }}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="carousel-item active">
                      <img
                        src="path/to/default-image.jpg" // Puedes poner una imagen por defecto si no hay imágenes
                        className="d-block w-100"
                        alt="Imagen predeterminada"
                        style={{ objectFit: 'contain', height: 'auto', maxHeight: '500px' }}
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
            {/* TITULO Y QUE CONTIENE (CAMAS, HABITACIONES, ETC) */}
            <h2>{papel.tipo} | {papel.direccion}</h2>
            <p>
              {papel.capacidad} {"personas"} • {papel.habitaciones} {"habitaciones"} • {papel.baños} {"baños"}
            </p>
            <hr />
            {/* DESCRIPCIÓN */}
            <p>{papel.descripcion}</p>
            {/* QUE OFRECE */}
            <h3>Servicios que ofrece :</h3>
          </Container>
        </>
      ) : (
        <p>Propiedad no encontrada</p>
      )}
    </div>
  );
};

export default Mainpropiedad;
