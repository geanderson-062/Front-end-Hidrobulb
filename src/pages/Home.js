import React from "react";
import BulboSimulacao from "../components/HomeContent";
import RedirectButton from "../components/ButtonRedirect";

function Home() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h5>Realize Simulações do Bulbo Umido em Camada Superficial</h5>
        <p>
          Leia o conteudo abaixo para saber mais sobre Bulbo Umido em Camada
          Superficial
        </p>
      </div>
      <RedirectButton />
      <BulboSimulacao />
    </>
  );
}

export default Home;
