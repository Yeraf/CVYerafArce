import React from "react";
import "../CSS/css/Home.css";
import Estudios from "../Img/Home/estudios-universitarios.jpg";
import Imagen from "../Img/Cv/base-de-datos.jpg";

function Home() {
  return (
    <div className="main-contenedor-all">
      <article>

      </article>
      <article className="article-home-1">
        <div className="article-home-div">
          <h1 className="home-h1">Estudios</h1>
          <h3>Bachillerato educación media (MEP)</h3>
          <p>Bachillerato educación media concluido en 2015</p>
          <h3>Avanzado conversacional de Inglés (Universal de Idiomas)</h3>
          <p>Se impartió del 06 de junio del 2016 al 01 de noviembre del 2017, completando un total de 320 horas.</p>
          <h3>Curso en línea HTML5 (Udemy)</h3>
          <p>Se impartió el 21 de Diciembre del 2022, un total de 6 horas.</p>
          <h3>Master en desarrollo Web Front end developer (VLA Academy)</h3>
          <p>Se impartió del mes de Febrero 2022 al mes de Septiembre del 2022, para un total de 8 meses aproximados.</p>
          <h3>Universidad Internacional de las Americas (UIA)</h3>
          <p>Actualmente estudiando Ing en Software.</p>
        </div>
        <div className="div-home-img">
          <img className="img-home" src={Estudios}></img>
        </div>
      </article>
      <article></article>
    </div>
  );
}

export default Home;
