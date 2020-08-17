import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logInThunkCreator } from "../store/user/actions";
import { selectToken } from "../store/user/selector";

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
      <form>
        <label>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={submitLogin}>Log in</button>
      </form>
    </div>
  );
}
