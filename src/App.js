import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import SimulacaoNorte from "../src/components/NorteSimulation";
import SimulacaoNordeste from "../src/components/NordesteSimulation";
import SimulacaoCentroOeste from "../src/components/CentroOesteSimulation";
import SimulacaoSudeste from "../src/components/SudesteSimulation";
import SimulacaoSul from "../src/components/SulSimulation";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("");

  return (
    <>
      <Header />
      <div className="container">
        <h3 className="header center-align">
          Simulação do Bulbo Úmido Em camada Superfical
        </h3>
        <div className="input-field col s12">
          <select
            className="browser-default"
            value={selectedComponent}
            onChange={(e) => setSelectedComponent(e.target.value)}
          >
            <option value="" disabled>
              Escolha Uma Região
            </option>
            <option value="Norte">Norte</option>
            <option value="Nordeste">Nordeste</option>
            <option value="CentroOeste">Centro Oeste</option>
            <option value="Sudeste">Sudeste</option>
            <option value="Sul">Sul</option>
          </select>
        </div>
        <div className="row">
          <div className="col s12">
            {selectedComponent === "Norte" && (
              <>
                <SimulacaoNorte />
              </>
            )}
            {selectedComponent === "Nordeste" && (
              <>
                <SimulacaoNordeste />
              </>
            )}
            {selectedComponent === "CentroOeste" && (
              <>
                <SimulacaoCentroOeste />
              </>
            )}
            {selectedComponent === "Sudeste" && (
              <>
                <SimulacaoSudeste />
              </>
            )}
            {selectedComponent === "Sul" && (
              <>
                <SimulacaoSul />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
