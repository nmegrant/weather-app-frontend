import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchesThunkCreator } from "../../store/searches/actions";
import { selectSearches } from "../../store/searches/selectors";
import * as d3 from "d3";
import "./StatsPage.css";

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
    .attr("width", 400)
    .attr("height", 400);

  svg
    .selectAll("rect")
    .data(searches)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 50)
    .attr("y", (d, i) => 400 - d.numSearches * 60)
    .attr("width", 25)
    .attr("height", (d, i) => d.numSearches * 100);

  svg
    .selectAll("text")
    .data(searches)
    .enter()
    .append("text")
    .text((d) => d.location)
    .attr("x", (d, i) => i * 50)
    .attr("y", (d, i) => 400 - d.numSearches * 60 - 3)
    .style("font-size", "14px")
    .style("fill", "red")
    .style("writing-mode", "tb")
    .attr("transform", "translate(10,10)");

  return (
    <div className="body">
      <h1>Stats on Cities Searched</h1>
      <div className="graph" ref={ref}></div>
    </div>
  );
}
