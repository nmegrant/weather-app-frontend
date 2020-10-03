import React from "react";
import { Link } from "react-router-dom";
import "./MainPageWeatherCard.css";

export default function MainPageWeatherCard(props) {
  return (
    <Link style={{ textDecoration: "none" }} to={`/${props.id}`}>
      <div className="card">
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
