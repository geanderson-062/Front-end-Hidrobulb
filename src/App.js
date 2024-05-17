import React from "react";
import "./assets/index.css";
//framework
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//paginas
import Home from "./pages/Home";
import Simulacoes from "./pages/Simulacoes";
import Justificativa from "./pages/Justificativa";
import NaoDisponivel from "./pages/NaoDisponivel";
//componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingView from "./components/LoadingView";

function App() {
  return (
    <Router>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Simulacoes" element={<Simulacoes />} />
            <Route path="/Justificativa" element={<Justificativa />} />
            <Route path="/NaoDisponivel" element={<NaoDisponivel />} />
          </Routes>
        </div>
        <Footer />
        <LoadingView />
      </div>
    </Router>
  );
}

export default App;
