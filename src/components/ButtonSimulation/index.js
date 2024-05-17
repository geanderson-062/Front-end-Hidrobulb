import React, { useState } from "react";

function SimulationButton({ handleSimulation }) {
  const [buttonText, setButtonText] = useState("Obter dados para Simulação.");

  const handleClick = () => {
    setButtonText("Obtendo dados, aguarde...");
    handleSimulation();
  };

  return (
    <button
      className="btn waves-effect waves-light green text-white"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}

export default SimulationButton;
