import React from "react";
import "./style.css";

function BulboSimulacao() {
  return (
    <>
      <section className="container" id="container">
        <div id="introducao">
          <h4>Simulação do Bulbo em Camada Superficial</h4>
          <p>
            A Simulação do Bulbo em Camada Superficial é uma técnica avançada
            que visa modelar a dinâmica da água na superfície do solo. Ao
            analisar como a água é distribuída e movimentada na camada
            superficial do solo, essa simulação desempenha um papel crucial na
            compreensão dos processos hidrológicos e na gestão dos recursos
            hídricos.
          </p>
        </div>
        <div id="importancia">
          <h4>Importância das simulações</h4>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-i6UAfzuOpfCOpETJ8C3a57ngwYtW8qflZg&usqp=CAU"
            alt="agua"
            style={{ width: 350, height: 350 }}
          />
          <div>
            <strong>Gestão da Irrigação:</strong>
            <p>
              Ao entender como a água se move no solo, os agricultores podem
              ajustar os padrões de irrigação para garantir uma distribuição
              uniforme e eficiente da água, melhorando assim o crescimento das
              plantas e a produtividade agrícola.
            </p>
            <strong>Previsão de Inundações e Secas:</strong>
            <p>
              A capacidade de prever eventos extremos, como inundações e secas,
              é fundamental para a segurança e resiliência das comunidades. A
              simulação do bulbo em camada superficial fornece insights valiosos
              sobre a disponibilidade de água no solo, permitindo medidas
              preventivas e ações de mitigação.
            </p>
            <strong>Planejamento Urbano e Ambiental:</strong>
            <p>
              Em áreas urbanas, entender como a água se infiltra no solo é
              essencial para o planejamento adequado de drenagem e controle de
              enchentes. Além disso, essa simulação é útil para avaliar o
              impacto ambiental de projetos de desenvolvimento urbano,
              garantindo uma gestão sustentável dos recursos hídricos.
            </p>
          </div>
          <h4>Informações Necessárias para a Simulação</h4>
          <img
            src="https://sqm-vitas.com.br/wp-content/uploads/2020/11/30883A-8-formacao-bulbo.png"
            alt="Bulbo"
            style={{ width: 350, height: 350 }}
          />
          <div>
            <strong>Propriedades do Solo: </strong>
            <p>
              A textura do solo influencia diretamente na capacidade de
              infiltração e retenção de água. Parâmetros como condutividade
              hidráulica, porosidade, capacidade de campo e ponto de murcha
              permanente são essenciais para modelar com precisão o
              comportamento hidrológico do solo.
            </p>
            <strong>Condições Iniciais do Solo: </strong>
            <p>
              Definir a umidade inicial do solo e a concentração inicial de
              solutos é crucial para iniciar a simulação em um estado realista.
              Essas condições fornecem uma base sólida para o desenvolvimento do
              modelo e garantem resultados mais precisos e confiáveis.
            </p>
            <strong>Condições de Contorno:</strong>
            <p>
              As condições de contorno, como fluxo de água na superfície do
              solo, taxa de evaporação e padrões de precipitação, representam as
              interações do solo com o ambiente externo. Considerar essas
              condições é fundamental para capturar com precisão os processos
              hidrológicos na simulação.
            </p>
            <strong>Parâmetros Climáticos:</strong>
            <p>
              Variáveis climáticas, como temperatura, umidade relativa,
              velocidade do vento e radiação solar, influenciam diretamente a
              evaporação da água do solo e a transpiração das plantas. Integrar
              dados climáticos é essencial para tornar a simulação mais realista
              e precisa.
            </p>
            <strong>Geometria do Domínio: </strong>
            <p>
              A geometria do domínio define a extensão espacial da simulação,
              incluindo a espessura do solo e a área da superfície do solo.
              Esses parâmetros são fundamentais para calcular volumes e fluxos
              de água com precisão, garantindo que a simulação seja
              representativa do ambiente real.
            </p>
            <strong>Intervalo de Tempo:</strong>
            <p>
              O intervalo de tempo utilizado na simulação determina a resolução
              temporal do modelo. Um intervalo de tempo adequado é crucial para
              capturar mudanças rápidas no sistema e garantir resultados
              precisos ao longo do tempo.
            </p>
            <strong>Condições de Saturação e Drenagem: </strong>
            <p>
              Descrever como a água é movimentada no solo, incluindo o estado de
              saturação do solo e o tipo de drenagem, é fundamental para
              entender a disponibilidade de água para as plantas e outros
              processos relacionados ao transporte de água no solo.
            </p>
          </div>
        </div>

        <div id="simulacao">
          <h4>Configuração de Simulação no HYDRUS 3D</h4>
          <img
            src="https://www.pc-progress.com/Images/Pgm_Hydrus3D/MainPg_03.jpg"
            alt="HYDRUS 3D"
            style={{ width: 350, height: 350 }}
          />
          <p>
            A simulação fornece informações detalhadas sobre os dados
            necessários para configurar uma simulação da camada superficial do
            bulbo úmido no software{" "}
            <a href="https://www.pc-progress.com/en/Default.aspx?hydrus">
              HYDRUS 3D
            </a>{" "}
            . Ao integrar esses dados, os usuários podem realizar simulações
            precisas e detalhadas, analisando como fatores como propriedades do
            solo, condições climáticas e geometria do domínio influenciam a
            distribuição e movimentação da água no solo.
          </p>
        </div>
        <div id="metodologia">
          <h4>Metodologia de Geração de Dados</h4>
          <img
            src="https://www.inf.ufsc.br/~andre.zibetti/probabilidade/figures/norm1-1.png"
            alt="Gaussiana"
            style={{ width: 350, height: 350 }}
          />
          <p>
            A simulação utiliza uma metodologia baseada na distribuição normal
            (Gaussiana) para gerar parâmetros climáticos realistas ao longo do
            tempo e espaço. Essa abordagem garante que a simulação seja
            consistente com as características climáticas observadas na região
            específica da simulação, fornecendo resultados confiáveis e
            relevantes para análise e tomada de decisões.
          </p>
        </div>

        <div id="regioes">
          <h4>Simulação de Regiões no Brasil</h4>
          <img
            src="https://static.todamateria.com.br/upload/52/40/524057d4384e8-regioes-brasileiras.jpg"
            alt="Regiões do brasil"
            style={{ width: 350, height: 350 }}
          />
          <p>
            A metodologia é adaptada para simular as condições climáticas e
            hidrológicas de diferentes regiões no Brasil, levando em
            consideração as variações geográficas e climáticas presentes no
            país. Isso inclui a consideração de fatores como o clima tropical
            predominante em grande parte do território, as características
            específicas das regiões Norte, Nordeste, Centro-Oeste, Sudeste e
            Sul, e a influência de eventos climáticos como o El Niño e La Niña.
            Ao ajustar os parâmetros da simulação de acordo com as
            características regionais do Brasil, os resultados obtidos são mais
            precisos e aplicáveis às condições reais encontradas no país,
            contribuindo para uma melhor compreensão dos processos hidrológicos
            e uma gestão mais eficaz dos recursos hídricos.
          </p>
        </div>
      </section>
    </>
  );
}

export default BulboSimulacao;
