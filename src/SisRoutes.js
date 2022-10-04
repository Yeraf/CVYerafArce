import React from "react";
import { Routes, Route } from "react-router-dom";
import Cv from "./Components/Cv";
import Home from "./Components/Home";
import Contacto from "./Components/Contact";
import Portafolio from "./Components/Portafolio";

function SisRoutes() {
  return (
    <Routes>
      <Route exact index path="/" element={<Cv />} />
      <Route exact index path="/CVYerafArce/" element={<Cv />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/contacto" element={<Contacto />} />
      <Route exact path="/portafolio" element={<Portafolio />} />
    </Routes>
  );
}

export default SisRoutes;
