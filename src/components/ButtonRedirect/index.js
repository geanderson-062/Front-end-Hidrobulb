import React from "react";
import { Link } from "react-router-dom";

function RedirectButton() {
  return (
    <div
      style={{ textAlign: "center", marginBottom: "50px", marginTop: "50px" }}
    >
      <Link className="btn waves-effect waves-light green" to="/Simulacoes">
        Obter dados para Simulações.
      </Link>
    </div>
  );
}

export default RedirectButton;
