import React from "react";

function SimulationButton({ handleSimulation }) {
  return (
    <button
      className="btn waves-effect waves-light blue"
      onClick={handleSimulation}
    >
      Iniciar Simulação do Bulbo
    </button>
  );
}

export default SimulationButton;
