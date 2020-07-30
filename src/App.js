import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
