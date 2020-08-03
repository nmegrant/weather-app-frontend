import React from "react";
import { useParams } from "react-router-dom";

export default function CityPage() {
  const parameters = useParams();
  console.log(parameters.cityId);
  return (
    <div>
      <h1>City</h1>
    </div>
  );
}
