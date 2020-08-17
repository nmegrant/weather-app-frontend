import React from "react";
import { Switch, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "./store/user/selector";

import "./App.css";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const user = useSelector(selectUser());

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/:cityId" component={CityPage} />
      </Switch>
    </div>
  );
}

export default App;
