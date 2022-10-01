import "./App.css";
import "./CSS/cssbootswatch/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cv from "./Components/Cv";
import Contacto from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Portafolio from "./Components/Portafolio";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Cv />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/portafolio" element={<Portafolio />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
