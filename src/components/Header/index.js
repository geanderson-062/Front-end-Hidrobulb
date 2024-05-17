/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper green">
        <Link to="/" className="brand-logo center">
          HydroBulb
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/simulacoes">Simulações</Link>
          </li>
          <li>
            <Link to="/justificativa">justificativa</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
