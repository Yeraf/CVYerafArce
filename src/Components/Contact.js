import React from "react";
import "../CSS/css/Contacto.css";
import Numero from "../Img/Icons/whatsapp-green.png";
import Face from "../Img/Icons/facebook.png";
import Email from "../Img/Icons/gmail.png";
import Direccion from "../Img/Icons/location.png";

function Contact() {
  return (
    <div className="main-contenedor-all">
      <article className="article-contact">
        <div className="article-contact-div-all">
          <div className="article-contact-div-contact">
            <h1 className="article-h1">Para contacto</h1>
            <h5 className="contact-h5">
              <img className="contact-img" src={Numero}></img>+506 8726-1983
            </h5>
            <h5 className="contact-h5">
              <img className="contact-img" src={Face}></img>Yeraf Arce Guerrero
            </h5>
            <h5 className="contact-h5">
              <img className="contact-img" src={Email}></img>
              yerafarceguerrero9@gmail.com
            </h5>
            <h5 className="contact-h5">
              <img className="contact-img" src={Direccion}></img>San José, CR
            </h5>
          </div>
          <div className="article-contact-div-references">
            <h1>Referencias</h1>
            <div className="article-div-contact-referencias">
              <div className="referencias-div-1">
                <h3>Jeffrey Sequeira Araya</h3>
                <h5>Dueño de empresa Noah Systems</h5>
                <h3>+506 8682-8012</h3>
              </div>
              <div className="referencias-div-2">
                <h3>Joshua Vargas Cubillo</h3>
                <h5>Compañero de trabajo</h5>
                <h3>+506 8361-3896</h3>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Contact;
