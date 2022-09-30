import React from "react";
import "../CSS/css/Home.css";
import Estudios from "../Img/Home/estudios-universitarios.jpg";
import MiFoto from "../Img/Home/Mi-foto-2.jpeg";

function Home() {
  return (
    <div className="main-contenedor-all">
      <article className="article-home-1">
        <div className="article-home-div">
          <h1 className="home-h1">Estudios</h1>
          <h4><b>Bachillerato educación media (MEP)</b></h4>
          <p>Bachillerato educación media concluido en 2015</p>
          <h4><b>Avanzado conversacional de Inglés (Universal de Idiomas)</b></h4>
          <p>
            Se impartió del 06 de junio del 2016 al 01 de noviembre del 2017,
            completando un total de 320 horas.
          </p>
          <h4><b>Curso en línea HTML5 (Udemy)</b></h4>
          <p>Se impartió el 21 de Diciembre del 2022, un total de 6 horas.</p>
          <h4><b>Master en desarrollo Web Front end development (VLA Academy)</b></h4>
          <p>
            Se impartió del mes de Febrero 2022 al mes de Septiembre del 2022,
            para un total de 8 meses aproximados.
          </p>
          <h4><b>Universidad Internacional de las Americas (UIA)</b></h4>
          <p>Actualmente estudiando Ing en Software.</p>
        </div>
        <div className="div-home-img">
          <img className="img-home" src={Estudios}></img>
        </div>
      </article>
      <article className="article-home-2">
        <div className="article-home-all">
          <div className="div-home-img">
            <img className="img-home" src={MiFoto}></img>
          </div>
          <div className="article-home-text">
            <div className="home-text-only">
            <h1 className="">Acerca de Mi</h1>
            <p>
              Me considero una persona empática, paciente, confiable, con buenos
              principios éticos y morales. Considero que el trabajo en equipo es
              crucial y muy importante; me adapto muy rápidamente en mi entorno
              de trabajo, soy bueno escuchando y acatando las ordenes. Me
              considero autodidacta y con un gran afán por aprender y enseñar.
              Espero ser de gran valor personal y lucrativo para su empresa.
            </p>
            </div>
          </div>
        </div>
      </article>
      <article></article>
    </div>
  );
}

export default Home;
