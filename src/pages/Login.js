import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { logInThunkCreator } from "../store/user/actions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submitLogin(event) {
    event.preventDefault();
    dispatch(logInThunkCreator(email, password));
    setEmail("");
    setPassword("");
  }

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
