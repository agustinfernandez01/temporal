import { useRef } from 'react';
import React from "react";
import Footer from "../componentes/Footer";
import HeaderL from "../componentes/HeaderL";
import Mainlanding from "../componentes/Mainlanding";


const Landing = () => {

  const contactoRef = useRef(null);

  const scrollToContact = () => {
    contactoRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <HeaderL scrollToContact={scrollToContact} />
      <Mainlanding/>
      <Footer ref={contactoRef} />
    </>
  );
};

export default Landing;
