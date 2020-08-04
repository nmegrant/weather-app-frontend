import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [search, setSearch] = useState("");

  async function submitCity(event) {
    event.preventDefault();
    const queryParams = encodeURIComponent(search);
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${queryParams}&APPID=${process.env.REACT_APP_API_KEY}`
    );
    setSearch("");
    console.log(response.data);
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
        <button style={{ marginLeft: "5px" }} onClick={submitCity}>
          search
        </button>
      </form>
    </div>
  );
}
