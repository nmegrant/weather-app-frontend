import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/:cityId" component={CityPage} />
        <Route path="/login" component={Login} />
        <Route path="./signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
