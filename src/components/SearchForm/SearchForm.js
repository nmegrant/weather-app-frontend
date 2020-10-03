import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchForm.css";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  let history = useHistory();

  async function submitCity(event) {
    event.preventDefault();
    const queryParams = encodeURIComponent(search);
    history.push(`/${queryParams}`);
    setSearch("");
  }

  return (
    <div>
      <form>
        <label>Search for a city</label>{" "}
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className="search-button" onClick={submitCity}>
          search
        </button>
      </form>
    </div>
  );
}
