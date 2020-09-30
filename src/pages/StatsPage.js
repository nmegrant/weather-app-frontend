import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchesThunkCreator } from "../store/searches/actions";
import { selectSearches } from "../store/searches/selectors";
import * as d3 from "d3";

export default function StatsPage() {
  const dispatch = useDispatch();
  const searches = useSelector(selectSearches());
  const ref = useRef(null);
  console.log(searches);

  useEffect(() => {
    dispatch(fetchSearchesThunkCreator());
  }, [dispatch]);

  const svg = d3
    .select(ref.current)
    .append("svg")
    .attr("width", 300)
    .attr("height", 300);

  svg
    .selectAll("rect")
    .data(searches)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 30)
    .attr("y", (d, i) => 300 - d.numSearches * 50)
    .attr("width", 25)
    .attr("height", (d, i) => d.numSearches * 100);

  svg
    .selectAll("text")
    .data(searches)
    .enter()
    .append("text")
    .text((d) => d.location)
    .attr("x", (d, i) => i * 30)
    .attr("y", (d, i) => 300 - d.numSearches * 50 - 3);

  return (
    <div>
      <h1>Stats on Cities Searched</h1>
      <div ref={ref} style={{ border: "solid" }}></div>
    </div>
  );
}
