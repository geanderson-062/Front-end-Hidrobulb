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
    <>
      {soilTexture && (
        <div className="row">
          <div className="col s12">
            <h3>Propriedades do Solo</h3>
            <p>Textura do Solo: {soilTexture}</p>
            <p>Condutividade Hidráulica: {hydraulicConductivity}</p>
            <p>Porosidade: {porosity}</p>
            <p>Capacidade de Campo: {fieldCapacity}</p>
            <p>Ponto de Murcha Permanente: {wiltingPoint}</p>
          </div>
        </div>
      )}

      {initialMoisture && (
        <div className="row">
          <div className="col s12">
            <h3>Condições Iniciais</h3>
            <p>Umidade Inicial: {initialMoisture}</p>
            <p>Concentração Inicial de Solutos: {soluteConcentration}</p>
          </div>
        </div>
      )}

      {surfaceWaterFlow && (
        <div className="row">
          <div className="col s12">
            <h3>Condições de Contorno</h3>
            <p>Fluxo de Água na Superfície do Solo: {surfaceWaterFlow}</p>
            <p>Taxa de Evaporação: {evaporationRate}</p>
            <p>Precipitação: {precipitation}</p>
          </div>
        </div>
      )}

      {temperature && (
        <div className="row">
          <div className="col s12">
            <h3>Parâmetros Climáticos</h3>
            <p>Temperatura: {temperature}</p>
            <p>Umidade Relativa: {humidity}</p>
            <p>Velocidade do Vento: {windSpeed}</p>
            <p>Radiação Solar: {radiation}</p>
          </div>
        </div>
      )}

      {surfaceArea && (
        <div className="row">
          <div className="col s12">
            <h3>Geometria do Domínio</h3>
            <p>Área da Superfície do Solo: {surfaceArea}</p>
            <p>Espessura do Solo: {soilThickness}</p>
          </div>
        </div>
      )}

      {timeInterval && (
        <div className="row">
          <div className="col s12">
            <h3>Intervalo de Tempo</h3>
            <p>Intervalo de Tempo para a Simulação: {timeInterval}</p>
          </div>
        </div>
      )}

      {saturation && (
        <div className="row">
          <div className="col s12">
            <h3>Condições de Saturação e Drenagem</h3>
            <p>Estado de Saturação do Solo: {saturation}</p>
            <p>Tipo de Drenagem: {drainage}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ResultSimulation;
