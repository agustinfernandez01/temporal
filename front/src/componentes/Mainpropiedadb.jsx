import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Mainpropiedadb = () => {
  const [propb, setPropb] = useState(null);
  const { id } = useParams();

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
    singlepropbs();
  }, [id]);

  if (propb === null) {
    return <p>Cargando propiedad...</p>;
  }

  return (
    <div>
      {propb ? (
        <>
          <Container>
            <h1> {propb.titulo}</h1> <br />
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
            <h2>
              {propb.tipo} | {propb.direccion}
            </h2>
            <p>
              {propb.capacidad} {"personas"} • {propb.habitaciones} {"habitaciones"} • {propb.baños} {"baños"}
            </p>
            <hr />
            {/* DESCRIPCION */}
            <p>{propb.descripcion}</p>
            {/* QUE OFRECE */}
            <h3>Servicios que ofrece :</h3>
          </Container>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Mainpropiedadb;
