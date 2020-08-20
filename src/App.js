import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PersonalPage from "./pages/PersonalPage";
import { getLoggedInUserThunkCreator } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedInUserThunkCreator);
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={PersonalPage} />
        <Route exact path="/:cityId" component={CityPage} />
      </Switch>
    </div>
  );
}

export default App;
