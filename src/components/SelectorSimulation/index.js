import React, { useState } from "react";
import "./style.css";
import SimulacaoNorte from "../NorteSimulation";
import SimulacaoNordeste from "../NordesteSimulation";
import SimulacaoCentroOeste from "../CentroOesteSimulation";
import SimulacaoSudeste from "../SudesteSimulation";
import SimulacaoSul from "../SulSimulation";

function SelectorSimulation() {
  const [selectedComponent, setSelectedComponent] = useState("");

  return (
    <>
      <div id="container">
        <h4 className="header center-align">
          Simulação do Bulbo Úmido Em camada Superfical
        </h4>
        <div className="input-field col s12">
          <select
            id="selector"
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
    </>
  );
}

export default SelectorSimulation;
