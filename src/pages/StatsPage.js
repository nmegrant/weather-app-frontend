import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchesThunkCreator } from "../store/searches/actions";

export default function StatsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchesThunkCreator());
  }, [dispatch]);

  return (
    <div>
      <h1>Stats on Cities Searched</h1>
    </div>
  );
}
