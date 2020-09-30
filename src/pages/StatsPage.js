import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchesThunkCreator } from "../store/searches/actions";
import { selectSearches } from "../store/searches/selectors";
import * as d3 from "d3";

export default function StatsPage() {
  const dispatch = useDispatch();
  const searches = useSelector(selectSearches());

  useEffect(() => {
    dispatch(fetchSearchesThunkCreator());
  }, [dispatch]);

  return (
    <div>
      <h1>Stats on Cities Searched</h1>
    </div>
  );
}
