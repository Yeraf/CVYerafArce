import "./App.css";
import "./CSS/cssbootswatch/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import SisRoutes from "./SisRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SisRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
