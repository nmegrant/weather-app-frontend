import React from "react";
import { Link } from "react-router-dom";

export default function MainPageWeatherCard(props) {
  return (
    <Link to={`/${props.id}`}>
      <div
        style={{
          height: "300px",
          width: "200px",
          border: "solid",
          margin: "40px",
          padding: "10px",
        }}
      >
        <h1>{props.city}</h1>
        <h2>{props.temp}°C</h2>
        {props.weather.map((conditions) => {
          return (
            <div key={conditions.id}>
              <h3>{conditions.main}</h3>
              <p style={{ textTransform: "capitalize" }}>
                {conditions.description}
              </p>
            </div>
          );
        })}
      </div>
    </Link>
  );
}
