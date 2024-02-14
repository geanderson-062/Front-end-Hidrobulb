import React, { useState } from "react";
import { fetchData } from "../../service/BulboSuperficial_backend";
import "materialize-css/dist/css/materialize.min.css";
import SimulationButton from "../ButtonSimulation";
import ResultSimulation from "../ResultSimulation";

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
      <h2 className="header center-align">Simulação da Região Norte</h2>
      <div className="row">
        <div className="col s12 center-align">
          <SimulationButton handleSimulation={handleSimulation} />
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
    </div>
  );
}
export default Norte;
