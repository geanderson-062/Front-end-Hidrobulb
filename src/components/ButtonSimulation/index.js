import React from "react";

function SimulationButton({ handleSimulation }) {
  return (
    <button
      className="btn waves-effect waves-light green"
      onClick={handleSimulation}
    >
      Iniciar Simulação do Bulbo
    </button>
  );
}

export default SimulationButton;
