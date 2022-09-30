import React from "react";
import "../CSS/css/Cv.css";
import MiFoto from "../Img/Cv/MiFoto.jpeg";
import Lenguajes from "../Img/Cv/Front-end-img.png";
import Frameworks from "../Img/Cv/JavaScript-Frameworks.jpg";
import Bases from "../Img/Cv/base-de-datos.jpg";
import Otros from "../Img/Cv/redes-de-computadoras.jpg";
import Icon from  "../Img/Icons/global.png";
import { Roll } from "react-reveal";
import Jump from 'react-reveal/Jump';

function Cv() {
  return (
    <div className="main-contenedor-all">
      <main className="main-cv-complete">
        <div className="main-cv">
          <div>
            <img className="img-cv-picture" src={MiFoto}></img>
          </div>
          <div>
            <h1 className="text-color-cv">Yeraf Arce Guerrero</h1>
            <h3 className="text-color-cv">Front End Developer</h3>
            <p className="text-color-cv">yerafarceguerrero9@gmail.com</p>
            <p className="text-color-cv">+506 8726-1983</p>
          </div>
        </div>
      </main>
      <article className="article-cv-experiencia">
        <h1 className="experiencia-h1-title">Experiencia Laboral</h1>
        <div className="cv-experiencia-contenedor">
          <div className="cv-div-empresa">
            <h2>
              <b>Noah Systems</b>
            </h2>
            <p className="cv-text-p">5 años</p>
            <p className="cv-text-p">Inicio 2017 / Actual</p>
            <p className="cv-text-p">
              Puesto soporte técnico en sistema de facturación PDV
            </p>
            <p className="cv-text-p">
              Desarrollo trabajos de soporte y asistencia a un sistema de
              facturación PDV el cual se trabaja con bases de datos SQL server,
              tambien se hace trabajos de reparación de computadores en software
              y hardware, mantenimiento y todo lo relacionado a computadoras.
            </p>
          </div>
          <div className="cv-div-estudios">
            <h2>
              <b>Sin Empresa</b>
            </h2>
            <p className="cv-text-p">2022</p>
            <p className="cv-text-p">Front end developer Junior</p>
            <p className="cv-text-p">
              Llevé un curso Front end intensivo de 8 meses aproximados en la
              academia VLA Academy el cual aprendí HTML, CSS, JavaScript,
              frameworks como Angular, React, VUE, Bootstrap, Bootswatch, Github
              entre otros frameworks y tecnologías. Actualmente estudio Ing en
              software en la Universidad Internacional de las Americas (UIA).
            </p>
          </div>
        </div>
      </article>
      <article className="article-cv-cards">
        <h1 className="cv-h1-conocimientos">Conocimientos</h1>
        <div className="article-cv-container">
          <Jump>
          <div className="card text-white bg-secondary mb-3 cv-card-only">
            <div class="card-header">Lenguajes</div>
            <div class="card-body">
            <img className="img-cv" src={Lenguajes}></img>
              <p class="card-text">
              Tengo conocimientos en algunos lenguales como: HTML, CSS, JavaScript y un poco de Java.
              </p>
            </div>
          </div>
          </Jump>
          <Jump>
          <div className="card text-white bg-secondary mb-3 cv-card-only">
            <div class="card-header">Frameworks</div>
            <div class="card-body">
            <img className="img-cv" src={Frameworks}></img>
              <p class="card-text">
              Se utilizar e implemetar algunos frameworks como: Bootstrap, Bootswatch, React, Angular, Vue; paginas como Github entre otros.
              </p>
            </div>
          </div>
          </Jump>
          <Jump>
          <div className="card text-white bg-secondary mb-3 cv-card-only">
            <div class="card-header">Bases Datos</div>
            <div class="card-body">
            <img className="img-cv" src={Bases}></img>
              <p class="card-text">
              Tengo conocimientos en bases de datos como SQL server y My Sql.
              </p>
            </div>
          </div>
          </Jump>
          <Jump>
          <div className="card text-white bg-secondary mb-3 cv-card-only">
            <div class="card-header">Otros</div>
            <div class="card-body">
            <img className="img-cv" src={Otros}></img>
              <p class="card-text">
              En infraestructura e implementación tengo conocimientos en
                redes, reparación y mantenimiento de computadoras entre otros.
              </p>
            </div>
          </div>
          </Jump>
        </div>
      </article>
      <article>
        <div className="cv-idiomas">
          <h1>Idiomas</h1>
          <h5 className="cv-h5-icon"><img className="icon-cv" src={Icon}></img> Inglés 60% (intermedio)</h5>
          <h5 className="cv-h5-icon"><img className="icon-cv" src={Icon}></img> Español (nativo)</h5>
        </div>
      </article>
    </div>
  );
}

export default Cv;
