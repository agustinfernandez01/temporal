import React from 'react'
import { Container , Button , Form } from 'react-bootstrap';
import HeaderL from "../componentes/HeaderL"
import Footer from '../componentes/Footer';
import '../css/contacto.css'



const Contactanos = () => {
  return (
    <div>
      <HeaderL/>
        <Container className="w-50">
        <br />
        <br />
        <h2 id="tltoc" className="text-center">
          CONTACTANOS
        </h2>
        <Form>
          <div className="mb-3">
            <label id='txtc' htmlFor="exampleInputName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control small-input" // Usa la clase personalizada
              id='txtc'
              aria-describedby="nameHelp"
              placeholder='Tu nombre'
            />
          </div>
          <div className="mb-3">
            <label id='txtc' htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control small-input" // Usa la clase personalizada
              id='txtc'
              aria-describedby="emailHelp"
              placeholder='tu@email.com'
            />
          </div>
          <div className="mb-3">
            <label id='txtc' htmlFor="exampleInputName" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              className="form-control small-input" // Usa la clase personalizada
              id='txtc'
              aria-describedby="nameHelp"
              placeholder='Tu numero de telefono'
            />
          </div>
          <div className="mb-3">
            <label id='txtc' htmlFor="exampleInputDescription" className="form-label">
                Mensaje
            </label>
            <textarea
              className="form-control small-textarea" // Usa la clase personalizada
              id='txtc'
              rows="4" // Ajusta la altura del textarea
              placeholder='¿ En que podemos ayudarte ?'
            ></textarea>
          </div>
          <Button
            style={{
              backgroundColor: "#5e5e5e",
              borderColor: "#5e5e5e",
              color: "white",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#FE6F01";
              e.currentTarget.style.borderColor = "#5e5e5e";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#5e5e5e";
              e.currentTarget.style.borderColor = "#5e5e5e";
            }}
            className="mt-auto m-2">
            Enviar
          </Button>
        </Form>
        <br />
        <br />
        <h3 id="tltinf" className='text-center'>INFORMACION DE CONTACTO</h3>
        <br />
        <p id='txtc'><span id='txtc' className="fw-bold">Telefono: </span> +549 381-4151764</p>
        <p id='txtc'><span id='txtc' className="fw-bold">Email: </span>temporalhome4@gmail.com</p>
      </Container>
      <Footer/>
    </div>
  )
}

export default Contactanos