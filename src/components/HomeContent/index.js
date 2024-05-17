import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import RedirectButton from "../Buttons/ButtonRedirect";
import "./style.css";

function BulboSimulacao() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(
      "#intro,#introducao, #importancia0, #importancia1, #importancia2 ,#importancia3, #importancia4, #importancia5, #importancia6, #importancia7 , #importancia8 , #importancia9,#simulacao, #metodologia, #regioes, #imagem0,#imagem1,#imagem2,#imagem3,#imagem4",
      {
        delay: 0, // Atraso antes da animação começar em milissegundos
        duration: 1000, // Duração da animação em milissegundos
        distance: "30px", // Distância que o elemento se moverá na animação
        origin: "bottom", // Origem da animação (top, bottom, left, right)
        easing: "ease-out", // Easing function para a animação (pode ser "linear", "ease-in", "ease-out", "ease-in-out")
        reset: true, // Define se a animação deve ser refeita sempre que o elemento se tornar visível novamente
      }
    );
  }, []);

  return (
    <>
      <section className="container" id="container">
        <div id="intro">
          <RedirectButton />
          <h4>
            Obtenha dados para Simulações de Bulbo Úmido em Camada Superficial
          </h4>
          <p>
            Leia o conteúdo abaixo para saber mais informações sobre as
            simulações de Bulbo Úmido em Camada Superficial.
          </p>
        </div>
        <div id="introducao">
          <h4>Introdução a Simulação do Bulbo em Camada Superficial</h4>
          <p>
            O “bulbo úmido” é uma região no solo que se forma ao redor de um
            ponto de emissão de água, como um gotejador em um sistema de
            irrigação por gotejamento. Esta região é chamada de “bulbo” devido à
            sua forma esférica ou ovalada que se forma devido à movimentação da
            água através do solo. A água se move para fora do ponto de emissão
            em todas as direções, criando uma zona úmida que se assemelha a um
            bulbo. A forma e o tamanho do bulbo úmido podem variar dependendo de
            vários fatores, incluindo as propriedades do solo (como a textura e
            a condutividade hidráulica), a taxa de aplicação de água e o tempo
            de irrigação. A simulação do bulbo úmido em camada superficial é uma
            técnica avançada que visa modelar a dinâmica da água na superfície
            do solo. Ao analisar como a água é distribuída e movimentada na
            camada superficial do solo, essa simulação desempenha um papel
            crucial na compreensão dos processos hidrológicos e na gestão dos
            recursos hídricos.
          </p>
        </div>
        <div>
          <div id="imagem0">
            <h4>Importância das simulações</h4>
            <img
              src="https://agrosmart.com.br/blog/wp-content/uploads/2022/05/pivo-irrigacao.png"
              alt="agua"
            />
          </div>
          <div id="importancia0">
            <strong>Gestão da Irrigação:</strong>
            <p>
              Ao entender como a água se move no solo, os agricultores podem
              ajustar os padrões de irrigação para garantir uma distribuição
              uniforme e eficiente da água, melhorando assim o crescimento das
              plantas e a produtividade agrícola.
            </p>
          </div>
          <div id="importancia1">
            <strong>Previsão de Inundações e Secas:</strong>
            <p>
              A capacidade de prever eventos extremos, como inundações e secas,
              é fundamental para a segurança e resiliência das comunidades. A
              simulação do bulbo em camada superficial fornece insights valiosos
              sobre a disponibilidade de água no solo, permitindo medidas
              preventivas e ações de mitigação.
            </p>
          </div>
          <div id="importancia2">
            <strong>Planejamento Urbano e Ambiental:</strong>
            <p>
              Em áreas urbanas, entender como a água se infiltra no solo é
              essencial para o planejamento adequado de drenagem e controle de
              enchentes. Além disso, essa simulação é útil para avaliar o
              impacto ambiental de projetos de desenvolvimento urbano,
              garantindo uma gestão sustentável dos recursos hídricos.
            </p>
          </div>
        </div>
        <div id="imagem1">
          <h4>Informações Necessárias para a Simulação</h4>
          <img
            src="https://sqm-vitas.com.br/wp-content/uploads/2020/11/30883A-8-formacao-bulbo.png"
            alt="Bulbo"
          />
        </div>
        <div>
          <div id="importancia3">
            <strong>Propriedades do Solo: </strong>
            <p>
              A textura do solo influencia diretamente na capacidade de
              infiltração e retenção de água. Parâmetros como condutividade
              hidráulica, porosidade, capacidade de campo e ponto de murcha
              permanente são essenciais para modelar com precisão o
              comportamento hidrológico do solo.
            </p>
          </div>
          <div id="importancia4">
            <strong>Condições Iniciais do Solo: </strong>
            <p>
              Definir a umidade inicial do solo e a concentração inicial de
              solutos é crucial para iniciar a simulação em um estado realista.
              Essas condições fornecem uma base sólida para o desenvolvimento do
              modelo e garantem resultados mais precisos e confiáveis.
            </p>
          </div>
          <div id="importancia5">
            <strong>Condições de Contorno:</strong>
            <p>
              As condições de contorno, como fluxo de água na superfície do
              solo, taxa de evaporação e padrões de precipitação, representam as
              interações do solo com o ambiente externo. Considerar essas
              condições é fundamental para capturar com precisão os processos
              hidrológicos na simulação.
            </p>
          </div>
          <div id="importancia6">
            <strong>Parâmetros Climáticos:</strong>
            <p>
              Variáveis climáticas, como temperatura, umidade relativa,
              velocidade do vento e radiação solar, influenciam diretamente a
              evaporação da água do solo e a transpiração das plantas. Integrar
              dados climáticos é essencial para tornar a simulação mais realista
              e precisa.
            </p>
          </div>
          <div id="importancia7">
            <strong>Geometria do Domínio: </strong>
            <p>
              A geometria do domínio define a extensão espacial da simulação,
              incluindo a espessura do solo e a área da superfície do solo.
              Esses parâmetros são fundamentais para calcular volumes e fluxos
              de água com precisão, garantindo que a simulação seja
              representativa do ambiente real.
            </p>
          </div>
          <div id="importancia8">
            <strong>Intervalo de Tempo:</strong>
            <p>
              O intervalo de tempo utilizado na simulação determina a resolução
              temporal do modelo. Um intervalo de tempo adequado é crucial para
              capturar mudanças rápidas no sistema e garantir resultados
              precisos ao longo do tempo.
            </p>
          </div>
          <div id="importancia9">
            <strong>Condições de Saturação e Drenagem: </strong>
            <p>
              Descrever como a água é movimentada no solo, incluindo o estado de
              saturação do solo e o tipo de drenagem, é fundamental para
              entender a disponibilidade de água para as plantas e outros
              processos relacionados ao transporte de água no solo.
            </p>
          </div>
        </div>
        <div>
          <div id="imagem2">
            <h4>Configuração de Simulação no HYDRUS 3D</h4>
            <img
              src="https://www.pc-progress.com/Images/Pgm_Hydrus3D/MainPg_03.jpg"
              alt="HYDRUS 3D"
            />
          </div>
          <div id="simulacao">
            <p>
              A simulação fornece informações detalhadas sobre os dados
              necessários para configurar uma simulação da camada superficial do
              bulbo úmido no software{" "}
              <a href="https://www.pc-progress.com/en/Default.aspx?hydrus">
                HYDRUS 3D
              </a>{" "}
              . Ao integrar esses dados, os usuários podem realizar simulações
              precisas e detalhadas, analisando como fatores como propriedades
              do solo, condições climáticas e geometria do domínio influenciam a
              distribuição e movimentação da água no solo.
            </p>
          </div>
        </div>
        <div>
          <div id="imagem3">
            <h4>Metodologia de Geração de Dados</h4>
            <img
              src="https://www.inf.ufsc.br/~andre.zibetti/probabilidade/figures/norm1-1.png"
              alt="Gaussiana"
            />
          </div>
          <div id="metodologia">
            <p>
              A simulação utiliza uma metodologia baseada na distribuição normal
              (Gaussiana) para gerar parâmetros climáticos realistas ao longo do
              tempo e espaço. Essa abordagem garante que a simulação seja
              consistente com as características climáticas observadas na região
              específica da simulação, fornecendo resultados confiáveis e
              relevantes para análise e tomada de decisões.
            </p>
          </div>
        </div>
        <div>
          <div id="imagem4">
            <h4>Simulação de Regiões no Brasil</h4>
            <img
              src="https://static.todamateria.com.br/upload/52/40/524057d4384e8-regioes-brasileiras.jpg"
              alt="Regiões do brasil"
            />
          </div>
          <div id="regioes">
            <p>
              A metodologia é adaptada para simular as condições climáticas e
              hidrológicas de diferentes regiões no Brasil, levando em
              consideração as variações geográficas e climáticas presentes no
              país. Isso inclui a consideração de fatores como o clima tropical
              predominante em grande parte do território, as características
              específicas das regiões Norte, Nordeste, Centro-Oeste, Sudeste e
              Sul, e a influência de eventos climáticos como o{" "}
              <a href="https://mundoeducacao.uol.com.br/geografia/el-nino-la-nina.htm">
                El Niño e La Niña
              </a>
              . Ao ajustar os parâmetros da simulação de acordo com as
              características regionais do Brasil, os resultados obtidos são
              mais precisos e aplicáveis às condições reais encontradas no país,
              contribuindo para uma melhor compreensão dos processos
              hidrológicos e uma gestão mais eficaz dos recursos hídricos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BulboSimulacao;
