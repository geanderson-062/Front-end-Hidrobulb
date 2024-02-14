/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">
          Logo
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/simulacoes">Simulações</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
