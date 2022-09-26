import "./App.css";
import "./CSS/cssbootswatch/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cv from "./Components/Cv";
import Contacto from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
