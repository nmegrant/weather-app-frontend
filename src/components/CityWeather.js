import React from "react";

export default function CityWeather(props) {
  console.log(props.wind);

  return (
    <div>
      <h1>Current Weather</h1>
      <div>
        Temperature:{" "}
        {props.main ? parseInt(props.main.temp) - 273 : <p>loading</p>}°C
      </div>
      <div>
        Range:{" "}
        {props.main ? parseInt(props.main.temp_min - 273) : <p>loading</p>} -{" "}
        {props.main ? parseInt(props.main.temp_max - 273) : <p>loading</p>}°C
      </div>
      <div>Humidity {props.main ? props.main.humidity : <p>loading</p>}%</div>
      <div>Wind: {props.wind ? props.wind.speed : <p>loading</p>}m/s</div>
      <div style={{ textTransform: "capitalize" }}>
        {props.weather ? props.weather[0].description : <p>loading</p>}
      </div>
    </div>
  );
}
