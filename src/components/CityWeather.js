import React from "react";

export default function CityWeather(props) {
  console.log(props.main);
  console.log(props.weather);

  return (
    <div>
      <h1>Current Weather</h1>
    </div>
  );
}
