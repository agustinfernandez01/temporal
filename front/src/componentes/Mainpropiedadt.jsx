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
      const response = await axios.get(
        `http://localhost:8000/propiedades/${id}`
      );
      setPapel(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("No se encontro la proviedad " + error);
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

  return (
    <div>
      {papel ? (
        <>
          <Container>
            <h1> {papel.titulo}</h1> <br />
            {/* IMAGENES */}
            <Container>
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="" className="d-block w-100" alt="..." />
                  </div>
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
            {/* TITULO Y QUE CONTIENE (CAMAS,HABITACIONES,ETC) */}
            <h2>{papel.tipo} | {papel.direccion}</h2>
            <p>
              {papel.capacidad} {"personas"} • {papel.habitaciones} {"habitaciones"} • {papel.baños} {"baños"}
            </p>
            <hr />
            {/* DESCRIPCION */}
            <p>{papel.descripcion}</p>
            {/* QUE OFRECE */}
            <h3>Servicios que ofrece :</h3>
            {papel.imagen}
          </Container>
        </>
      ) : (
        <p>Propiedad no encontrada</p>
      )}
    </div>
  );
};

export default Mainpropiedad;
