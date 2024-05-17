/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="page-footer green">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Contribuições</h5>
            <p className="grey-text text-lighten-4">
              Contribuições são bem-vindas! Se você encontrar algum problema ou
              tiver sugestões para melhorar esta Aplicação, sinta-se à vontade
              para entrar em contato.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Sobre</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#importancia">
                  Importância das simulações
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#metodologia">
                  Metodologia de Geração de Dados
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#simulacao">
                  Configuração de Simulação
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#regioes">
                  Simulação de Regiões
                </a>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/Simulacoes">
                  Fazer Simulação
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          &copy; {currentYear} HydroBulb
          <a
            className="grey-text text-lighten-4 right"
            href="https://documenter.getpostman.com/view/28383339/2sA2r3YRBz"
          >
            Documentação da api
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
