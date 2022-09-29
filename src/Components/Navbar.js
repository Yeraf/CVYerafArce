import React from "react";
import { Link } from "react-router-dom";
import "../CSS/css/Navbar.css";
import Lama from "../Img/Icons/llama1.png";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <Link className="navbar-brand" to="/">
                <img className="lama-navbar" src={Lama}></img>
            </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto mx-auto">
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                  Acerca de Mi
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/cv">
                  CV
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-sm-2"
                type="text"
                placeholder="Search"
              ></input>
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
