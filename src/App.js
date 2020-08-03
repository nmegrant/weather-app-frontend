import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

import "./App.css";
import CityPage from "./pages/CityPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/:cityId" component={CityPage} />
      </Switch>
    </div>
  );
}

export default App;
