import React from "react";

function ResultSimulation({
  soilTexture,
  hydraulicConductivity,
  porosity,
  fieldCapacity,
  wiltingPoint,
  initialMoisture,
  soluteConcentration,
  surfaceWaterFlow,
  evaporationRate,
  precipitation,
  temperature,
  humidity,
  windSpeed,
  radiation,
  surfaceArea,
  soilThickness,
  timeInterval,
  saturation,
  drainage,
}) {
  return (
    <div style={{ marginTop: 50, marginBottom: 50 }}>
      {soilTexture && (
        <div className="card green darken-1">
          <div className="card-content white-text">
            <span className="card-title">Propriedades do Solo</span>
            <p>Textura do Solo: {soilTexture}</p>
            <p>Condutividade Hidráulica: {hydraulicConductivity}</p>
            <p>Porosidade: {porosity}</p>
            <p>Capacidade de Campo: {fieldCapacity}</p>
            <p>Ponto de Murcha Permanente: {wiltingPoint}</p>
          </div>
        </div>
      )}

      {initialMoisture && (
        <div className="card green darken-1">
          <div className="card-content white-text">
            <span className="card-title">Condições Iniciais</span>
            <p>Umidade Inicial: {initialMoisture}</p>
            <p>Concentração Inicial de Solutos: {soluteConcentration}</p>
          </div>
        </div>
      )}

      {surfaceWaterFlow && (
        <div className="card green darken-1">
          <div className="card-content white-text">
            <span className="card-title">Condições de Contorno</span>
            <p>Fluxo de Água na Superfície do Solo: {surfaceWaterFlow}</p>
            <p>Taxa de Evaporação: {evaporationRate}</p>
            <p>Precipitação: {precipitation}</p>
          </div>
        </div>
      )}

      {temperature && (
        <div className="card green darken-1">
          <div className="card-content white-text">
            <span className="card-title">Parâmetros Climáticos</span>
            <p>Temperatura: {temperature}</p>
            <p>Umidade Relativa: {humidity}</p>
            <p>Velocidade do Vento: {windSpeed}</p>
            <p>Radiação Solar: {radiation}</p>
          </div>
        </div>
      )}

      {surfaceArea && (
        <div className="card green darken-1">
          <div className="card-content white-text">
            <span className="card-title">Geometria do Domínio</span>
            <p>Área da Superfície do Solo: {surfaceArea}</p>
            <p>Espessura do Solo: {soilThickness}</p>
          </div>
        </div>
      )}

      {timeInterval && (
        <div className="card green darken-1">
          <div className="card-content white-text">
            <span className="card-title">Intervalo de Tempo</span>
            <p>Intervalo de Tempo para a Simulação: {timeInterval}</p>
          </div>
        </div>
      )}

      {saturation && (
        <div className="card green darken-1">
          <div className="card-content white-text">
            <span className="card-title">
              Condições de Saturação e Drenagem
            </span>
            <p>Estado de Saturação do Solo: {saturation}</p>
            <p>Tipo de Drenagem: {drainage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultSimulation;
