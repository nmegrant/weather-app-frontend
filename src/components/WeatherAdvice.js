import React from "react";

export default function WeatherAdvice(props) {
  let dress = "";

  if (props.main && parseInt(props.main.temp) - 273 < 0) {
    dress = "Bundle up, she's a chill one!";
  } else if (props.main && parseInt(props.main.temp) - 273 > 25) {
    dress = "It's a scorcher, stay hydrated!";
  } else if (props.main) {
    dress = "Moderate temperatures, nice and comfortable.";
  }

  if (props.wind && parseInt(props.wind.speed) > 62) {
    dress = dress + " It's a gale outside! Be prepared.";
  } else if (props.wind && parseInt(props.wind.speed) > 89) {
    dress = dress + " Full on storm. Be careful!";
  } else if (props.wind && parseInt(props.wind.speed) > 119) {
    dress = dress + " It's a hurrican b'y! Stay the blazes home!";
  }

  if (
    props.weather &&
    props.weather[0].main.toLowerCase().indexOf("clear") !== -1
  ) {
    dress = dress + " Slip, slap, sloop - careful of the sun!";
  } else if (
    props.weather &&
    props.weather[0].main.toLowerCase().indexOf("fog") !== -1
  ) {
    dress = dress + " Visibility could be reduced! Take care.";
  }

  return (
    <div>
      <h1>What to Wear</h1>
      {dress}
    </div>
  );
}
