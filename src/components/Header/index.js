/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">
          Logo
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="sass.html">Inicio</a>
          </li>
          <li>
            <a href="badges.html">Simulações</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
