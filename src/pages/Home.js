import React, { useEffect } from "react";
import BulboSimulacao from "../components/HomeContent";
import RedirectButton from "../components/ButtonRedirect";
import ScrollReveal from "scrollreveal";

function Home() {
  useEffect(() => {
    ScrollReveal().reveal("#intro", {
      origin: "right",
      distance: "20px",
      duration: 1000,
      delay: 300,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });
  }, []);

  return (
    <>
      <div id="intro">
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h5>Realize Simulações do Bulbo Úmido em Camada Superficial</h5>
          <p>
            Leia o conteúdo abaixo para saber mais sobre Bulbo Úmido em Camada
            Superficial
          </p>
        </div>
        <RedirectButton />
      </div>
      <BulboSimulacao />
    </>
  );
}

export default Home;
