// src/App.js
import React, { useState } from "react";
import { fetchData } from "./api"; // Importe a função fetchData

function App() {
  const [data, setData] = useState(null);

  const handleFetch = async (endpoint) => {
    try {
      const responseData = await fetchData(endpoint);
      setData(responseData);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="App">
      <h1>Simulação do Bulbo Úmido</h1>
      <button onClick={() => handleFetch("/soil_properties/norte")}>
        Obter Propriedades do Solo
      </button>
      <button onClick={() => handleFetch("/initial_conditions/norte")}>
        Obter Condições Iniciais
      </button>
      <button onClick={() => handleFetch("/boundary_conditions/norte")}>
        Obter Condições de Contorno
      </button>
      {/* Adicione mais botões conforme necessário para outros endpoints */}

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
