import React, {useRef} from 'react';
import { Container, Form, Button } from "react-bootstrap";
import "../css/contacto.css";
import emailjs from '@emailjs/browser';

const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ciblhad', 'template_wrz5t9e', form.current, {
        publicKey: 'ji8DK8xy0i2zK0ZpG',
      })
      .then(
        () => {
          alert('Mensaje enviado correctamente');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div id="cnt-c" className="w-100">
      <Container fluid className="px-3 px-md-5">
        <br />
        <br />
        <h2 id="tltoc" className="text-center">
          CONTACTO
        </h2>
        <Form ref={form} onSubmit={sendEmail} className="d-flex flex-column align-items-center"> 
          <div style={{ maxWidth: "500px", width: "100%" }}>
            {/* Input para Nombre */}
            <div className="mb-3">
              <label id="txtc" htmlFor="exampleInputName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control small-input"
                id="exampleInputName"
                aria-describedby="nameHelp"
                placeholder="Tu nombre"
                name='user_name'
                required
                
              />
            </div>

            {/* Input para Email */}
            <div className="mb-3">
              <label id="txtc" htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input

                type="user_email"
                className="form-control small-input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="tu@email.com"
                name='email'
                required
                
                />
            </div>

            {/* Textarea para Mensaje */}
            <div className="mb-3">
              <label id="txtc" htmlFor="exampleInputDescription" className="form-label">
                Mensaje
              </label>
              <textarea
              type='text'
              name='message'
              className="form-control small-textarea"
              id="exampleInputDescription"
              rows="4"
              placeholder="¿ En que podemos ayudarte ?"
              required
                
              ></textarea>
            </div>
          </div>

          {/* Botón de Enviar */}
          <Button type='submit' id="txtc"
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
          <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_template" value="table"/>

        </Form>
        <br />
        <br />
      </Container>
    </div>
  );
}

export default Contacto;
