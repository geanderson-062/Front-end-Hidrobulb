import React, { useState } from "react";
import { fetchData } from "../../services/BulboSuperficial_backend";
import SimulationButton from "../Buttons/ButtonSimulation";
import ResultSimulation from "../ResultSimulation";
import DownloadButton from "../Buttons/ButtonDowload";

function Norte() {
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
      const soilProperties = await fetchData("/soil_properties/norte");
      const initialConditions = await fetchData("/initial_conditions/norte");
      const boundaryConditions = await fetchData("/boundary_conditions/norte");
      const climateParameters = await fetchData("/climate_parameters/norte");
      const domainGeometry = await fetchData("/domain_geometry/norte");
      const timeIntervalData = await fetchData("/time_interval/");
      const saturationDrainage = await fetchData("/saturation_drainage/norte");

      setSoilTexture(soilProperties.soil_texture);
      setHydraulicConductivity(soilProperties.hydraulic_conductivity);
      setPorosity(soilProperties.porosity);
      setFieldCapacity(soilProperties.field_capacity);
      setWiltingPoint(soilProperties.wilting_point);
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

  const handleDownload = () => {
    const now = new Date();
    const formattedDate = now.toLocaleString();
    const data = `
    Dados para Simulação de bulbo umido na região Norte.
    Soil Texture: ${soilTexture}
    Hydraulic Conductivity: ${hydraulicConductivity}
    Porosity: ${porosity}
    Field Capacity: ${fieldCapacity}
    Wilting Point: ${wiltingPoint}
    Initial Moisture: ${initialMoisture}
    Solute Concentration: ${soluteConcentration}
    Surface Water Flow: ${surfaceWaterFlow}
    Evaporation Rate: ${evaporationRate}
    Precipitation: ${precipitation}
    Temperature: ${temperature}
    Humidity: ${humidity}
    Wind Speed: ${windSpeed}
    Radiation: ${radiation}
    Surface Area: ${surfaceArea}
    Soil Thickness: ${soilThickness}
    Time Interval: ${timeInterval}
    Saturation: ${saturation}
    Drainage: ${drainage}
    Dados fornecidos pelo sistema HydroBulb em: ${formattedDate}
    `;

    const blob = new Blob([data], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dados_para`_simulacao_de_bulbo_umido_no_Norte";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="container">
      <h2 className="header center-align">Simulação da Região Norte</h2>
      <div className="row">
        <div className="col s12 center-align">
          {!soilTexture && (
            <SimulationButton handleSimulation={handleSimulation} />
          )}
        </div>
      </div>
      <ResultSimulation
        soilTexture={soilTexture}
        hydraulicConductivity={hydraulicConductivity}
        porosity={porosity}
        fieldCapacity={fieldCapacity}
        wiltingPoint={wiltingPoint}
        initialMoisture={initialMoisture}
        soluteConcentration={soluteConcentration}
        surfaceWaterFlow={surfaceWaterFlow}
        evaporationRate={evaporationRate}
        precipitation={precipitation}
        temperature={temperature}
        humidity={humidity}
        windSpeed={windSpeed}
        radiation={radiation}
        surfaceArea={surfaceArea}
        soilThickness={soilThickness}
        timeInterval={timeInterval}
        saturation={saturation}
        drainage={drainage}
      />
      {soilTexture && <DownloadButton handleDownload={handleDownload} />}
    </div>
  );
}
export default Norte;
