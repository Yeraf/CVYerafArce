import React from "react";
import { Link } from "react-router-dom";
import "../CSS/css/Navbar.css";
import Lama from "../Img/Icons/llama1.png";
import { Flip, Bounce } from "react-reveal";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Flip>
            <Link className="navbar-brand" to="/">
              <img className="lama-navbar" src={Lama}></img>
            </Link>
          </Flip>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto mx-auto">
              <li class="nav-item">
                <Bounce right>
                  <Link class="nav-link active" to="/">
                    Cv
                  </Link>
                </Bounce>
              </li>
              <li class="nav-item">
                <Bounce top>
                  <Link class="nav-link active" to="/home">
                    Acerca de Mi
                  </Link>
                </Bounce>
              </li>
              <li class="nav-item">
                <Bounce left>
                  <Link class="nav-link active" to="/contacto">
                    Contacto
                  </Link>
                </Bounce>
              </li>
              <li class="nav-item">
                <Bounce left>
                  <Link class="nav-link active" to="/portafolio">
                    Portafolio
                  </Link>
                </Bounce>
              </li>
            </ul>
            <form class="d-flex">
                {/* <button to="/Pdf" class="btn btn-info my-2 my-sm-0" type="">
                  Descargar PDF Curriculum
                </button> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
