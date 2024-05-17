import React, { useEffect } from "react";
import SelectorSimulation from "../components/SelectorSimulation";
import ScrollReveal from "scrollreveal";

function Simulacoes() {
  useEffect(() => {
    ScrollReveal().reveal("#selectorSimulationContainer", {
      origin: "right",
      distance: "20px",
      duration: 1000,
      delay: 300,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });
  }, []);

  return (
    <>
      <div id="SimulacoesContainer">
        <div id="selectorSimulationContainer">
          <SelectorSimulation />
        </div>
      </div>
    </>
  );
}

export default Simulacoes;
