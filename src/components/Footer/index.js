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
            <h5 className="white-text">Artigos e justificação cientifica.</h5>
            <ul>
              <li>
                <Link
                  to="/justificativa"
                  className="grey-text text-lighten-3"
                  href="#importancia"
                >
                  Justificação cientifica
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/NaoDisponivel" className="grey-text text-lighten-3">
                  Artigos
                </Link>
              </li>
            </ul>
            <h5 className="white-text">Contribuições.</h5>
            <p className="grey-text text-lighten-4">
              Contribuições são bem-vindas! Se você encontrar algum problema ou
              tiver sugestões para melhorar esta Aplicação, sinta-se à vontade
              para entrar em contato.
            </p>
            <a
              href="https://github.com/geanderson-062/Simulacao-bulbo-camada-superficial"
              className="grey-text text-lighten-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
                style={{ marginRight: 5 }}
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              Repositório
            </a>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Sobre.</h5>
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
            <h5 className="white-text" style={{ marginTop: 10 }}>
              Apoiadores.
            </h5>
            <p className="grey-text text-lighten-4">
              Financiador Facepe
              <br></br>
              Apoiadores Den UFPE
            </p>
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
