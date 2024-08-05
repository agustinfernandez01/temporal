import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mainbsas = () => {
  const [buenosaires, setBuenosaires] = useState([]);

  const mostrarPropiedadesb = async () => {
    try {
      const response = await axios.get("http://localhost:8000/propiedadesb");
      setBuenosaires(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("error en la peticion");
    }
  };

  useEffect(() => {
    mostrarPropiedadesb();
  }, []);

  return (
    <div>
      <h1>Nuestras propiedades en Tucuman</h1>

      {buenosaires.map((propiedadb) => (
        <Card key={propiedadb.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{propiedadb.titulo}</Card.Title>
            <Card.Text>{propiedadb.descripcion}</Card.Text>
            <Link to={`/propiedadesb/${propiedadb.id}`}>
              <Button
                style={{
                  backgroundColor: "#FE6F01",
                  borderColor: "orange",
                  color: "white",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#5e5e5e";
                  e.currentTarget.style.borderColor = "#5e5e5e";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#FE6F01";
                  e.currentTarget.style.borderColor = "orange";
                }}
              >
                Go somewhere
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Mainbsas;
