import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { logInThunkCreator } from "../../store/user/actions";
import { selectToken } from "../../store/user/selector";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(selectToken());

  function submitLogin(event) {
    event.preventDefault();
    dispatch(logInThunkCreator(email, password));
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  return (
    <div>
      <h1>Log in!</h1>
      <form className="form">
        <div className="input-group">
          <label className="label">Email</label>
          <input
            className="input-field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Password</label>
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="login-button" onClick={submitLogin}>
          Log in
        </button>
        <p>
          Not a member? <Link to="/signup">Sign up now!</Link>
        </p>
      </form>
    </div>
  );
}
