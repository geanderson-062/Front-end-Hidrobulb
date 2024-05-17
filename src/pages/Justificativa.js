import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import JustificativaText from "../components/JustificativaText";

function Home() {
  useEffect(() => {
    ScrollReveal().reveal("#justicativa", {
      origin: "right",
      distance: "20px",
      duration: 1000,
      delay: 300,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });
  }, []);

  return (
    <>
      <div id="justificativa">
        <JustificativaText />
      </div>
    </>
  );
}

export default Home;
