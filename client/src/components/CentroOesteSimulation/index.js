import React, { useState } from "react";
import { fetchData } from "../../service/BulboSuperficial_backend";
import "materialize-css/dist/css/materialize.min.css";
import SimulationButton from "../ButtonSimulation";

function CentroOeste() {
  const [soilTexture, setSoilTexture] = useState(null);
  const [hydraulicConductivity, setHydraulicConductivity] = useState(null);
  const [porosity, setPorosity] = useState(null);
  const [fieldCapacity, setFieldCapacity] = useState(null);
  const [wiltingPoint, setWiltingPoint] = useState(null);
  const [initialMoisture, setInitialMoisture] = useState(null);
  const [soluteConcentration, setSoluteConcentration] = useState(null);
  const [surfaceWaterFlow, setSurfaceWaterFlow] = useState(null);
  const [evaporationRate, setEvaporationRate] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [radiation, setRadiation] = useState(null);
  const [surfaceArea, setSurfaceArea] = useState(null);
  const [soilThickness, setSoilThickness] = useState(null);
  const [timeInterval, setTimeInterval] = useState(null);
  const [saturation, setSaturation] = useState(null);
  const [drainage, setDrainage] = useState(null);

  const handleSimulation = async () => {
    try {
      const soilProperties = await fetchData("/soil_properties/centro_oeste");
      const initialConditions = await fetchData(
        "/initial_conditions/centro_oeste"
      );
      const boundaryConditions = await fetchData(
        "/boundary_conditions/centro_oeste"
      );
      const climateParameters = await fetchData(
        "/climate_parameters/centro_oeste"
      );
      const domainGeometry = await fetchData("/domain_geometry/centro_oeste");
      const timeIntervalData = await fetchData("/time_interval/");
      const saturationDrainage = await fetchData(
        "/saturation_drainage/centro_oeste"
      );

      const {
        texture,
        hydraulic_conductivity,
        porosity,
        field_capacity,
        wilting_point,
      } = soilProperties;
      setSoilTexture(texture);
      setHydraulicConductivity(hydraulic_conductivity);
      setPorosity(porosity);
      setFieldCapacity(field_capacity);
      setWiltingPoint(wilting_point);
      setInitialMoisture(initialConditions.initial_moisture);
      setSoluteConcentration(initialConditions.solute_concentration);
      setSurfaceWaterFlow(boundaryConditions.surface_water_flow);
      setEvaporationRate(boundaryConditions.evaporation_rate);
      setPrecipitation(boundaryConditions.precipitation);
      setTemperature(climateParameters.temperature);
      setHumidity(climateParameters.humidity);
      setWindSpeed(climateParameters.wind_speed);
      setRadiation(climateParameters.radiation);
      setSurfaceArea(domainGeometry.surface_area);
      setSoilThickness(domainGeometry.soil_thickness);
      setTimeInterval(timeIntervalData.time_interval);
      setSaturation(saturationDrainage.saturation);
      setDrainage(saturationDrainage.drainage);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container">
      <h2 className="header center-align">Simulação da Região Centro Oeste</h2>
      <div className="row">
        <div className="col s12 center-align">
          <SimulationButton handleSimulation={handleSimulation} />
        </div>
      </div>

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
    </div>
  );
}
export default CentroOeste;
