import React, { useState } from "react";

function SimulationButton({ handleSimulation }) {
  const [buttonText, setButtonText] = useState("Iniciar Simulação do Bulbo");

  const handleClick = () => {
    setButtonText("Realizando simulação, aguarde...");
    handleSimulation();
  };

  return (
    <button
      className="btn waves-effect waves-light green"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}

export default SimulationButton;
