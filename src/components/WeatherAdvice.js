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

  return (
    <div>
      <h1>What to Wear</h1>
      {dress}
    </div>
  );
}
