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
            <h1
              style={{
                fontFamily: "Kanit",
                fontWeight: 500,
              }}
              className="text-decoration-none "
            >
              {papel.titulo} - {papel.ciudad}
            </h1>
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
                        src="path/to/default-image.jpg"
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
              <h2
                style={{
                  fontFamily: "Kanit",
                  fontWeight: 300,
                }}
              >
                {papel.tipo} | {papel.direccion}
              </h2>
              <p style={{
                    fontFamily: "Kanit",
                    fontWeight: 300,
                  }}>
                {papel.capacidad} {"personas"} • {papel.habitaciones}{" "}
                {"habitaciones"} • {papel.baños} {"baños"}
              </p>

              <p style={{
                    fontFamily: "Kanit",
                    fontWeight: 300,
                  }} >{papel.descripcion}</p>
              <h3 style={{
                    fontFamily: "Kanit",
                    fontWeight: 300,
                  }}>Servicios que ofrece :</h3>
              <p style={{
                    fontFamily: "Kanit",
                    fontWeight: 300,
                  }}>{papel.servicios}</p>
            </Container>

            <hr />

            <Container className="p-4 border rounded shadow-sm">
              <h4 style={{
                    fontFamily: "Kanit",
                    fontWeight: 300,
                  }}>Contacto</h4>
              <p style={{
                    fontFamily: "Kanit",
                    fontWeight: 300,
                  }}>
                Si deseas más información, detalles específicos o simplemente
                quieres conocer más sobre esta propiedad, no dudes en
                contactarnos. Puedes hacer clic en el enlace a continuación para
                iniciar una conversación directa con nosotros a través de
                WhatsApp. ¡Estaremos encantados de ayudarte en lo que necesites!
                Consultar por esta propiedad en WhatsApp
              </p>
              <a
                href={`https://wa.me/5493814151764?text=%20Hola!%20Me%20gustaria%20saber%20más%20sobre%20la%20propiedad:%20${papel.titulo}.%20Muchas%20gracias!`}
                target="_blank"
              >
                Hace click aca por mas informacion sobre esta propiedad en
                WhatsApp
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

export default Mainpropiedad;
