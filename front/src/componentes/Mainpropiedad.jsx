import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

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
        {papel.titulo ? (
          <>
          <Container>
            <h1>{papel.titulo}</h1>
            </Container>
          </>
        ) : (
          <p>Propiedad no encontrada</p>
        )}
    </div>
  );
};

export default Mainpropiedad;
