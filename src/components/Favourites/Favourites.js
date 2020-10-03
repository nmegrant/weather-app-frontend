import React from "react";

export default function Favourites(props) {
  function clickButton(event) {
    event.preventDefault();
    props.changeFavourite(props.location);
  }

  return (
    <div>
      <h5>
        Favourite:{" "}
        <button onClick={clickButton}>{props.favourite ? "❤️" : "♡"}</button>
      </h5>
    </div>
  );
}
