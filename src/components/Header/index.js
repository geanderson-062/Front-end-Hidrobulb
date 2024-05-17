import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <>
      <nav class="nav-extended green">
        <div class="nav-wrapper green">
          <Link to="/" class="brand-logo" style={{ marginLeft: 10 }}>
            HydroBulb
          </Link>
        </div>
        <div style={{ justifyContent: "center" }}>
          <ul class="side-nav" id="mobile-demo">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/simulacoes">Simulações</Link>
            </li>
            <li>
              <Link to="/justificativa">Justificativa</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
